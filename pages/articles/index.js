import React from "react";
import sanity from "../../lib/sanity";

import Link from "next/link";
import Head from "next/head";

import moment from "moment";
import { urlFor } from "../../utils/sanity";
import { ListWrapper } from "../../components/Article";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import { PRIMARY_FONT, DATETIME_MASK, PAGE_TITLE } from "../../constants";
import { NavLink } from "../../components/Navigation";

const INITIAL_COUNT_FETCHED = 10;
const ARTICLES_PER_PAGE = 10;

const Button = ({ title, ...rest }) => {
    return (
        <a {...rest}>
            <div>{title}</div>
            <style jsx>{`
                width: auto;
                cursor: pointer;
                float: left;
                padding: 8px 16px;
                border-radius: 3px;
                color: #fff;
                background-color: #2f80f9;

                @media screen and (max-width: 992px) {
                    margin: 0 16px;
                }
            `}</style>
        </a>
    );
};

const ShortArticle = ({ date, title, bodyPreview, mainImage, slug }) => {
    const dateTime = moment(date).format(DATETIME_MASK);

    return (
        <div className="short-article-wrapper">
            <div className="image">
                {mainImage && (
                    <Link
                        href="/articles/[slug]"
                        as={`/articles/${slug.current}`}
                    >
                        <a>
                            <img
                                src={urlFor(mainImage)
                                    .size(300, 200)
                                    .quality(100)
                                    .url()}
                                alt="Obrázok článku"
                            />
                        </a>
                    </Link>
                )}
            </div>
            <article className="short-article">
                <span className="short-article-date">{dateTime}</span>
                <h2 className="short-article-title">{title}</h2>
                {mainImage && (
                    <div className="image-smartphone">
                        <Link
                            href="/articles/[slug]"
                            as={`/articles/${slug.current}`}
                        >
                            <a>
                                <img
                                    src={urlFor(mainImage)
                                        .size(400, 180)
                                        .quality(100)
                                        .url()}
                                    alt="Obrázok článku"
                                />
                            </a>
                        </Link>
                    </div>
                )}
                <p className="short-article-text">{bodyPreview}</p>
                <NavLink
                    href="/articles/[slug]"
                    as={`/articles/${slug.current}`}
                >
                    Čítať viac
                </NavLink>
            </article>
            <style jsx>{`
                .image {
                    height: 200px;
                    flex: none;
                    padding: 14px 0 0 0;
                    width: 300px;
                }
                .image-smartphone {
                    display: none;
                }
                .short-article-wrapper {
                    display: flex;
                    flex-direction: row;
                    margin: 24px 48px 24px 0;
                }
                .short-article {
                    width: 500px;
                    padding: 8px 0 0 0;
                    margin: 0 0 0 24px;
                }
                .short-article.first-child {
                    border-top: none;
                }
                .short-article-date {
                    color: #777;
                    font-size: 11px;
                }
                .short-article-title {
                    font-family: ${PRIMARY_FONT};
                    font-size: 20px;
                }
                .short-article-text {
                    margin: 16px 48px 16px 0;
                    color: #1f1f1f;
                    line-height: 1.8;
                }
                @media screen and (max-width: 992px) {
                    .short-article-wrapper {
                        margin: 0;
                    }
                    .image {
                        display: none;
                    }
                    .image-smartphone {
                        display: flex;
                        width: 100%;
                        margin: 8px 0;
                        padding: 0;
                    }
                    .image-smartphone a,
                    .image-smartphone img {
                        width: 100%;
                    }
                    .short-article {
                        margin: 0 16px 36px 16px;
                        border-right: none;
                    }
                    .short-article-title {
                        font-size: 24px;
                        line-height: 1.3;
                    }
                    .short-article-text {
                        margin: 16px 0 16px 0;
                    }
                    .link {
                        margin: 16px 0;
                    }
                }
            `}</style>
        </div>
    );
};

const Articles = ({ articles: { count, ...articles }, skip }) => {
    const [items, setItems] = React.useState([...articles.items]);
    const [loading, setLoading] = React.useState(false);
    const [cursor, setCursor] = React.useState(1);

    const from = skip + (cursor - 1) * ARTICLES_PER_PAGE;
    const to = skip + (cursor * ARTICLES_PER_PAGE - 1);

    const loadMore = async () => {
        setLoading(true);
        sanity
            .fetch(
                `{
            'gal': *[_type == "article" && defined(gallery)]{gallery[1]{asset->{url}}},
            'items': *[_type == "article"]{
                title,
                slug,
                publishedAt,
                body,
                mainImage,
                bodyPreview,
                gallery[1]{asset->{url}}
              } | order(publishedAt desc) [${from}..${to}]
        }`
            )
            .then((result) => {
                setCursor(cursor + 1);
                setItems([...items, ...result.items]);
                setLoading(false);
            });
    };

    return (
        <Layout>
            <Head>
                <title>{`Naše dejiny | ${PAGE_TITLE}`}</title>
            </Head>
            <ListWrapper>
                <div className="heading">
                    <Heading
                        withSpacing
                        title="Naše dejiny"
                        level={2}
                    ></Heading>
                </div>
                {items.length > 0 &&
                    items.map((item, i) => (
                        <ShortArticle
                            key={i}
                            mainImage={item.mainImage}
                            date={item.publishedAt}
                            bodyPreview={item.bodyPreview}
                            slug={item.slug}
                            title={item.title}
                        ></ShortArticle>
                    ))}
                {count > cursor * ARTICLES_PER_PAGE && (
                    <Button
                        title={loading ? "Načítavam..." : "Staršie články"}
                        onClick={loadMore}
                    />
                )}
            </ListWrapper>
            <style jsx>{`
                .heading {
                    margin: 0 0 48px 320px;
                }
                .loading {
                    margin: 0 0 16px 0;
                }
                @media screen and (max-width: 992px) {
                    .heading {
                        margin: 0 0 0 16px;
                    }
                }
            `}</style>
        </Layout>
    );
};

export async function getStaticProps() {
    return {
        props: {
            skip: INITIAL_COUNT_FETCHED,
            articles: await sanity.fetch(`{
                'count': count(*[_type == "article"]),
                'gal': *[_type == "article" && defined(gallery)]{gallery[1]{asset->{url}}},
                'items': *[_type == "article"]{
                    title,
                    slug,
                    publishedAt,
                    body,
                    mainImage,
                    bodyPreview,
                    gallery[1]{asset->{url}}
                } | order(publishedAt desc) [0..${INITIAL_COUNT_FETCHED - 1}]
            }`),
        },
        revalidate: 1,
    };
}

export default Articles;

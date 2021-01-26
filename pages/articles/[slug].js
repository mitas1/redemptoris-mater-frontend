import React from "react";
import ErrorPage from "next/error";
import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";
import moment from "moment";

import sanity from "../../lib/sanity";
import { urlFor } from "../../utils/sanity";

import { NavLink } from "../../components/Navigation";
import Gallery from "../../components/Gallery";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import Heading from "../../components/Heading";
import { PRIMARY_FONT, DATETIME_MASK, PAGE_TITLE } from "../../constants";

export const ArticleContent = ({ children, negativeMargin }) => (
    <div className={negativeMargin ? "negative content" : "content"}>
        {children}
        <style jsx>{`
            .content {
                width: 600px;
                background-color: #fff;
                margin: 0 auto 0 auto;
                padding: 48px 60px;
                z-index: 1;
                display: block;
                position: relative;
            }

            .negative {
                margin: -90px auto 0 auto;
            }

            @media screen and (max-width: 992px) {
                .content {
                    width: 100%;
                    margin: 0;
                    padding: 0;
                }
                .content.negative {
                    margin: 0;
                }
            }
        `}</style>
    </div>
);

export const Wrapper = ({ children }) => (
    <div className="preamble-wrapper">
        {children}
        <style jsx>{`
            .preamble-wrapper {
                margin: 80px auto 0 auto;
                width: 700px;
                text-align: center;
            }
            @media screen and (max-width: 992px) {
                .preamble-wrapper {
                    width: 100%;
                    margin: 40px 0 0;
                    box-sizing: border-box;
                    text-align: left;
                }
            }
        `}</style>
    </div>
);

const RichText = ({ content }) =>
    content && (
        <div className="rich-text">
            <BlockContent renderContainerOnSingleChild blocks={content} />
            <style jsx>{`
                .rich-text {
                    line-height: 1.5;
                }
                .rich-text :global(p) {
                    margin: 16px 0;
                }
                .rich-text :global(> div > p:first-of-type::first-letter) {
                    display: block;
                    float: left;
                    font-family: ${PRIMARY_FONT};
                    font-size: 50px;
                    line-height: 28px;
                    padding-right: 8px;
                    padding-top: 8px;
                    font-weight: 400;
                    position: relative;
                }
                .rich-text :global(h1),
                .rich-text :global(h2) {
                    font-family: "Martel", serif;
                }
                .rich-text :global(blockquote) {
                    border-left: 4px solid #e9e9e9;
                    font-style: italic;
                    font-weight: 300;
                    padding: 0 0 0 30px;
                }
            `}</style>
        </div>
    );

const Article = ({ article, error }) => {
    if (error) {
        return <ErrorPage statusCode={error} />;
    }

    const dateTime = moment(article.publishedAt).format(DATETIME_MASK);
    const author = article.author ? article.author.name : null;

    return (
        <Layout>
            <Head>
                <title>{`${article.title} | ${PAGE_TITLE}`}</title>
                <meta name="description" content={article.bodyPreview} />
            </Head>
            <Content>
                <Wrapper>
                    <Heading title={article.title} level={2}></Heading>
                    <span className="date-author">
                        {dateTime}
                        {author && (
                            <span>
                                {" - "}Autor: <strong>{author}</strong>
                            </span>
                        )}
                    </span>
                </Wrapper>
                {article.mainImage && (
                    <img
                        src={urlFor(article.mainImage)
                            .size(900, 450)
                            .quality(100)
                            .url()}
                        alt="Hlavný obrázok"
                        className="image"
                    />
                )}
                <ArticleContent negativeMargin={article.mainImage}>
                    <RichText content={article.body} />
                </ArticleContent>
                {article.gallery && (
                    <div className="gallery-wrapper">
                        <Gallery images={article.gallery} />
                    </div>
                )}
                <div className="space"></div>
                <ArticleContent>
                    <NavLink href="/articles" back>
                        Späť na ostatné články
                    </NavLink>
                </ArticleContent>
            </Content>
            <style jsx>{`
                .gallery-wrapper {
                    margin: 48px auto;
                }
                .space {
                    margin-top: 64px;
                }
                .image {
                    margin: 40px auto 0 auto;
                    width: 900px;
                    height: 450px;
                    background-color: #efefef;
                    display: block;
                }
                .date-author {
                    font-size: 14px;
                    color: #999;
                }
                @media screen and (max-width: 992px) {
                    .image {
                        margin: 16px 0 24px;
                        width: 100%;
                        height: auto;
                    }
                }
            `}</style>
        </Layout>
    );
};

export async function getStaticProps({ params: { slug } }) {
    const type =
        slug === "misia-seminarov-redemptoris-mater"
            ? "mainArticle"
            : "article";

    const article = await sanity.fetch(
        `*[_type == "${type}" && slug.current == "${slug}"]{
            title,
            bodyPreview,
            body,
            mainImage,
            publishedAt,
            author->{name},
            gallery[]{asset->{url}}}[0]`
    );

    if (article == null) {
        return { error: 404 };
    }

    return {
        props: { article },
    };
}

export async function getStaticPaths() {
    const paths = [];

    const posts = await sanity.fetch(`
        *[_type == "article"]{
            slug,
            'categories': categories[]->slug,
        }
    `);

    for (const post of posts) {
        paths.push({ params: { slug: post.slug.current } });
    }

    return { paths, fallback: true };
}

export default Article;

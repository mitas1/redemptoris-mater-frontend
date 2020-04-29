import React from "react";
import sanity from "../lib/sanity";
import moment from "moment";

import { NavLink } from "../components/Navigation";
import Layout from "../components/Layout";
import Content from "../components/Content";
import Heading from "../components/Heading";

import Baner from "../components/Baner";

import Scroll from "react-scroll";
import { PRIMARY_FONT, DATETIME_MASK } from "../constants";
import { IBAN } from "../constants/contact";

const Element = Scroll.Element;

const ShortArticle = ({ publishedAt, title, bodyPreview, _id }) => {
    const dateTime = moment(publishedAt).format(DATETIME_MASK);

    return (
        <article className="short-article">
            <span className="short-article-date">{dateTime}</span>
            <h2 className="short-article-title">{title}</h2>
            <p className="short-article-text">{bodyPreview}</p>
            <NavLink href="articles/[id]"  as={`articles/${_id}`}>Čítať viac</NavLink>
            <style jsx>{`
                .short-article {
                    flex: 1;
                    margin: 0 48px 0 0;
                    border-right: 1px dotted #979797;
                }
                .short-article:last-child {
                    margin: 0;
                    border-right: none;
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
                    .short-article {
                        margin: 0 0 36px 0;
                        border-right: none;
                    }
                    .short-article-title {
                        font-size: 24px;
                    }
                    .short-article-text {
                        margin: 16px 0 16px 0;
                    }
                }
            `}</style>
        </article>
    );
};

export const Donation = ({file}) => (
    <div className="donation">
        <Content>
            <div className="donation-square">
                <h1 className="heading">Podporiť nás môžete</h1>
                <br />
                <p>Poukázaním 2% z dane. Každý rok, začiatkom roka</p>
                <a className={`${file && 'enabled'} download-button`}
                    href={file ? `${file}?dl=` : '#'}>Stiahnuť formulár</a>
                <br />
                <p>Alebo platbou na účet</p>
                <span className="iban">{IBAN}</span>
            </div>
        </Content>
        <style jsx>{`
            .donation {
                width: 100%;
                background-image: url("/images/icon2.jpg");
                background-size: cover;
                padding: 100px 24px;
                box-sizing: border-box;
            }
            .donation p {
                font-weight: 300;
            }
            .heading {
                font-family: ${PRIMARY_FONT};
                font-weight: 600;
                width: 300px;
                font-size: 34px;
            }
            .donation-square {
                width: 560px;
                background-color: #000;
                color: #fff;
                padding: 60px 48px 90px 48px;
                align-items: flex-start;
                display: flex;
                flex-direction: column;
                opacity: 0.9;
                box-sizing: border-box;
            }
            .download-button {
                padding: 16px 24px;
                margin: 16px 0;
                width: auto;
                background-color: #006cb9;
                opacity: 0.4;
                color: #fff;
                text-decoration: none;
                border-radius: 3px;
                cursor: not-allowed;
            }
            .download-button.enabled {
                cursor: pointer;
                opacity: 1;
            }
            .iban {
                font-size: 30px;
                font-family: ${PRIMARY_FONT};
            }
            @media screen and (max-width: 992px) {
                .donation {
                    padding: 48px 0;
                }
                .donation-square {
                    width: 100%;
                    padding: 48px;
                }
                .iban {
                    font-size: 20px;
                }
            }
        `}</style>
    </div>
);

const Index = ({ items: { article, mainArticle, donationForm } }) => (
    <Layout>
        <Baner
            _id={mainArticle._id}
            title={mainArticle.title}
            body={mainArticle.bodyPreview}
        />
        <Content>
            <Heading withSpacing title="Novinky" />
            <div className="short-article-wrapper">
                {article.map((item, i) => (
                    <ShortArticle key={item._id} {...item} />
                ))}
            </div>
        </Content>
        <Element name="donation">
            <Donation file={donationForm.url} />
        </Element>
        <style jsx>{`
            .baner {
                height: 700px;
            }
            .short-article-wrapper {
                display: flex;
                margin: 0 0 80px 0;
            }
            @media screen and (max-width: 992px) {
                .short-article-wrapper {
                    flex-direction: column;
                }
            }
        `}</style>
    </Layout>
);

Index.getInitialProps = async () => {
    return {
        items: await sanity.fetch(`{
            'mainArticle': *[_type == "mainArticle"][0],
            'donationForm': *[_type == 'settings'][0] {
                "url": donationForm.asset->url
            },
            'article': *[_type == "article"]{
                title,
                _id,
                publishedAt,
                bodyPreview,
            } | order(publishedAt desc) [0..2]
        }`),
    };
};

export default Index;

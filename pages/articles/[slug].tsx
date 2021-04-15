import React from 'react';

import moment from 'moment';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import BlockContent from '@sanity/block-content-to-react';

import Button from '../../components/Button';
import Content from '../../components/Content';
import Gallery from '../../components/Gallery';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import { NavLink } from '../../components/Navigation';
import Spinner from '../../components/Spinner';
import {
  DATETIME_MASK,
  PAGE_TITLE,
  PRIMARY_FONT,
} from '../../constants';
import sanity from '../../lib/sanity';
import { urlFor } from '../../utils/sanity';

export interface ArticleContentProps {
  negativeMargin?: boolean
}

export const ArticleContent = ({ children, negativeMargin = false }) => (
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
)

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
)

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
  )

const Article = ({ article, error }) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Layout>
        <div className="wrapper">
          <Spinner />
          <style jsx>{`
            .wrapper {
              display: flex;
              align-items: center;
              height: calc(100vh - 60px);
              box-sizing: border-box;
            }
          `}</style>
        </div>
      </Layout>
    )
  }

  const dateTime = moment(article.publishedAt).format(DATETIME_MASK)
  const author = article.author ? article.author.name : null

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
          <div className="image">
            <Image
              src={urlFor(article.mainImage).size(900, 450).quality(100).url()}
              width={900}
              height={450}
            />
          </div>
        )}
        <ArticleContent negativeMargin={article.mainImage}>
          <RichText content={article.body} />
        </ArticleContent>
        <ArticleContent>
          {article.file && article.file.url && (
            <div className="dl-button">
              <Button href={`${article.file.url}?dl=`}>
                Stiahnuť PDF prílohu
              </Button>
            </div>
          )}
        </ArticleContent>
        {article.gallery && (
          <div className="gallery-wrapper">
            <Gallery images={article.gallery} />
          </div>
        )}
        <div className="space"></div>
        <ArticleContent>
          <NavLink href="/articles" as="/articles" back>
            Späť na ostatné články
          </NavLink>
        </ArticleContent>
      </Content>
      <style jsx>{`
        .dl-button {
          display: flex;
          justify-content: center;
          align-items: center;
        }
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
  )
}

export async function getStaticProps({ params: { slug } }) {
  const type =
    slug === "misia-seminarov-redemptoris-mater" ? "mainArticle" : "article"

  const article = await sanity.fetch(
    `*[_type == "${type}" && slug.current == "${slug}"]{
            title,
            bodyPreview,
            body,
            mainImage,
            publishedAt,
            author->{name},
            'file': {
                'url': file.asset->url,
                'name': file.name,
            },
            gallery[]{asset->{url}}}[0]`
  )

  if (!article) {
    return {
      notFound: true,
    }
  }

  return {
    props: { article },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const paths = []

  const posts = await sanity.fetch(`
        *[_type == "article"]{
            slug,
            'categories': categories[]->slug,
        }
    `)

  for (const post of posts) {
    paths.push({ params: { slug: post.slug.current } })
  }

  return { paths, fallback: true }
}

export default Article

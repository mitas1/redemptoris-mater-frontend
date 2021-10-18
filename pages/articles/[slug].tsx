import React, { FC } from "react";

import Head from "next/head";

import { ArticleContent } from "@components/article/ArticleContent";
import { ArticleHeadline } from "@components/article/ArticleHeadline";
import { Layout } from "@components/common";
import { CenterBox } from "@components/ui/CenterBox";
import { createSanityApi } from "@lib/sanity/api";
import { Post } from "@lib/sanity/types";

import { PAGE_TITLE } from "../../constants";

interface PostProps {
  post: Post;
}

const Post: FC<PostProps> = ({ post }) => (
  <>
    <Head>
      <title>{`${post.title} | ${PAGE_TITLE}`}</title>
      <meta name="description" content={post.bodyPreview} />
    </Head>
    <Layout>
      <CenterBox>
        <ArticleHeadline>{post.title}</ArticleHeadline>
        {/* <ArticleMetaInfo></ArticleMetaInfo> */}
        <ArticleContent value={post.body} image={post?.mainImage} />
        {/* <Galery></Galery> */}
      </CenterBox>
    </Layout>
  </>
);

export async function getStaticProps({ params: { slug } }) {
  const sanityApi = createSanityApi();

  const type =
    slug === "misia-seminarov-redemptoris-mater" ? "mainArticle" : "article";

  const post = await sanityApi.getPost({ slug, type });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const sanityApi = createSanityApi();

  const paths = [];

  const posts = await sanityApi.getPosts();

  for (const post of posts) {
    paths.push({ params: { slug: post.slug.current } });
  }

  return { paths, fallback: true };
}

export default Post;

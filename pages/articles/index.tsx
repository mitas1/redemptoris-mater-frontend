import React, { FC } from "react";

import Head from "next/head";

import { ArticleHeadline } from "@components/article/ArticleHeadline";
import { Layout } from "@components/common";
import { ArticleFragment } from "@components/ui/ArticleFragment";
import { CenterBox } from "@components/ui/CenterBox";
import Divider from "@components/ui/Divider/Divider";
import {
  Pagination,
  PaginationProps,
} from "@components/ui/Pagination";
import { createSanityApi } from "@lib/sanity/api";
import { Post } from "@lib/sanity/types";
import { urlFor } from "@lib/sanity/utils";
import { parseInteger } from "@utils/parse";

import { PAGE_TITLE } from "../../constants";

const POSTS_PER_PAGE = 10;

interface PostsProps {
  posts: Post[];
  pagination: PaginationProps;
}

const calcPageOffset = (page: number, itemsPerPage: number) => {
  const offset = (page - 1) * itemsPerPage;
  return {
    from: offset,
    to: offset + itemsPerPage,
  };
};

const Posts: FC<PostsProps> = ({ posts, pagination }) => {
  return (
    <Layout>
      <Head>
        <title>{`Naše dejiny | ${PAGE_TITLE}`}</title>
      </Head>
      <CenterBox>
        <ArticleHeadline>Nase dejiny</ArticleHeadline>
        <Divider vertical className="max-w-3xl m-auto">
          {posts.map(
            ({
              _id,
              slug,
              title,
              bodyPreview,
              author,
              mainImage,
              publishedAt,
            }) => (
              <ArticleFragment
                layout="image"
                image={urlFor(mainImage).size(300, 200).quality(100).url()}
                href={`/articles/${slug.current}`}
                title={title}
                body={bodyPreview}
                author={author}
                publishedAt={publishedAt}
                key={_id}
              />
            )
          )}
          <Pagination {...pagination}></Pagination>
        </Divider>
      </CenterBox>
    </Layout>
  );
};

export async function getServerSideProps({ query: { page } }) {
  const sanityApi = createSanityApi();

  const currentPage = parseInteger(page, 1);
  const { from, to } = calcPageOffset(currentPage, POSTS_PER_PAGE);

  const posts = await sanityApi.getPosts(from, to);
  const postsCount = await sanityApi.getPostsCount();
  const pageCount = Math.ceil(postsCount / POSTS_PER_PAGE);

  const pagination: PaginationProps = {
    hasNext: currentPage > pageCount,
    hasPrev: currentPage > 1,
    currentPage,
    pageCount,
  };

  return {
    props: {
      posts,
      pagination,
    },
  };
}

export default Posts;

import React, { FC } from "react";

import {
  DonationFormHeroBanner,
  Layout,
} from "@components/common";
import {
  Headline,
  Paragraph,
} from "@components/text";
import { Link } from "@components/ui";
import { ArticleFragment } from "@components/ui/ArticleFragment";
import { CenterBox } from "@components/ui/CenterBox";
import Divider from "@components/ui/Divider/Divider";
import { HeroBanner } from "@components/ui/HeroBanner";
import { createSanityApi } from "@lib/sanity/api";
import type {
  DonationForm as TDonationForm,
  Post,
} from "@lib/sanity/types";

interface IndexProps {
  posts: Post[];
  mainPost: Post;
  donationForm: TDonationForm;
}

const Index: FC<IndexProps> = ({ posts, mainPost, donationForm }) => (
  <Layout>
    <HeroBanner image="/images/icon.jpg" contentClassName="sm:max-w-lg">
      <Headline level={1} inverse>
        {mainPost.title}
      </Headline>
      <Paragraph inverse>{mainPost.bodyPreview}</Paragraph>
      <Link href="/" style="button">
        Čítať viac
      </Link>
    </HeroBanner>
    <CenterBox className="py-24">
      <Divider>
        {posts.map(({ _id, slug, title, bodyPreview, author, publishedAt }) => (
          <ArticleFragment
            href={`/articles/${slug.current}`}
            title={title}
            body={bodyPreview}
            author={author}
            publishedAt={publishedAt}
            key={_id}
          />
        ))}
      </Divider>
    </CenterBox>
    <DonationFormHeroBanner file={donationForm.url} />
  </Layout>
);

export const getStaticProps = async () => {
  const sanityApi = createSanityApi();

  const posts = await sanityApi.getPosts(0, 2);
  const donationForm = await sanityApi.getDonationForm();
  const mainPost = await sanityApi.getPost({ type: "mainArticle" });

  return {
    props: {
      posts,
      mainPost,
      donationForm,
    },
    revalidate: 1,
  };
};

export default Index;

import ArticleFragmentComponent from "./ArticleFragment";

export default {
  title: "ui/ArticleFragment",
  component: ArticleFragmentComponent,
  args: {
    href: "/",
    author: "Elon Mask",
    title: "Article Heading",
    body: "Some preview",
    publishedAt: "2022-05-02",
  },
};

export const NormalLayout = (args) => <ArticleFragmentComponent {...args} />;

export const ImageLayoutWithoutImage = (args) => (
  <ArticleFragmentComponent {...args} />
);

ImageLayoutWithoutImage.args = {
  layout: "image",
};

export const ImageLayoutWithImage = (args) => (
  <ArticleFragmentComponent {...args} />
);

ImageLayoutWithImage.args = {
  layout: "image",
  image: "https://place-hold.it/350x150",
};

import { ArticleFragment } from "../ArticleFragment";
import DividerComponent from "./Divider";

export default {
  title: "ui/Divider",
  component: DividerComponent,
};

const ArticleFragmentMock = () => (
  <ArticleFragment
    href="/"
    publishedAt="2022-05-02"
    author="Elon Mask"
    title="Article Heading"
    body="Lorem ipsum dolor sit amet conseqteteur."
  />
);

const ArticleFragmentListMock = () => (
  <>
    <ArticleFragmentMock />
    <ArticleFragmentMock />
    <ArticleFragmentMock />
  </>
);

export const Horizontal = () => (
  <DividerComponent>
    <ArticleFragmentListMock />
  </DividerComponent>
);

export const Vertical = () => (
  <DividerComponent vertical>
    <ArticleFragmentListMock />
  </DividerComponent>
);

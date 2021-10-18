import {
  Headline,
  Paragraph,
} from "../";
import { Article as ArticleComponent } from "./";

export default {
  title: "typography/Article",
  component: Headline,
};

const LOREM_ISPUM_PARAGRAPH =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Duis tristique sollicitudin nibh sit amet. Lectus magna fringilla urna porttitor rhoncus dolor. Arcu cursus euismod quis viverra. Elit sed vulputate mi sit amet mauris commodo. Aliquam sem fringilla ut morbi tincidunt augue interdum. Sed blandit libero volutpat sed cras ornare. Eget velit aliquet sagittis id consectetur purus ut. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing.";

export const Article = () => (
  <ArticleComponent>
    <Headline level={1}>Headline 1</Headline>
    <Paragraph>{LOREM_ISPUM_PARAGRAPH}</Paragraph>
    <Headline level={2}>Headline 2</Headline>
    <Headline level={3}>Headline 3</Headline>
    <Paragraph>{LOREM_ISPUM_PARAGRAPH}</Paragraph>
    <Headline level={4}>Headline 4</Headline>
    <Paragraph>{LOREM_ISPUM_PARAGRAPH}</Paragraph>
    <Paragraph>{LOREM_ISPUM_PARAGRAPH}</Paragraph>
  </ArticleComponent>
);

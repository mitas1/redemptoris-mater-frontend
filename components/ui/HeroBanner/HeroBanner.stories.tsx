import {
  Headline,
  Paragraph,
} from "@components/text";

import HeroBannerComponent from "./HeroBanner";

export default {
  title: "ui/HeroBanner",
  component: HeroBannerComponent,
  args: {
    image: "https://place-hold.it/1000x600",
  },
};

export const Normal = (args) => (
  <HeroBannerComponent {...args}>
    <Headline level={1}>Headline</Headline>
    <Paragraph>Lorem ipsum dolor sit amet conseqteteur.</Paragraph>
  </HeroBannerComponent>
);

export const WithBox = (args) => (
  <HeroBannerComponent box {...args}>
    <Headline level={1}>Headline</Headline>
    <Paragraph>Lorem ipsum dolor sit amet conseqteteur.</Paragraph>
  </HeroBannerComponent>
);

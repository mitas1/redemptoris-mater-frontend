import { FC } from "react";

import {
  Blockquote,
  Headline,
  Paragraph,
} from "@components/text";
import {
  PortableText,
  PortableTextComponents,
  PortableTextProps,
} from "@portabletext/react";

import styles from "./ArticleContent.module.css";

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <Headline level={2}>{children})</Headline>,
    h3: ({ children }) => <Headline level={3}>{children})</Headline>,
    h4: ({ children }) => <Headline level={4}>{children})</Headline>,
    blockquote: ({ children }) => <Blockquote>{children})</Blockquote>,
    normal: ({ children }) => <Paragraph>{children})</Paragraph>,
  },
};

interface ArticleContentProps extends Pick<PortableTextProps, "value"> {
  image?: string;
}

const ArticleContent: FC<ArticleContentProps> = ({ value }) => (
  <article className={styles.article}>
    {/* TODO: Image */}
    <PortableText value={value} components={components} />
  </article>
);

export default ArticleContent;

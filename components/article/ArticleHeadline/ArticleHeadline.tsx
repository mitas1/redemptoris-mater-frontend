import { Headline } from "@components/text";

import styles from "./ArticleHeadline.module.css";

const ArticleHeadline = ({ children }) => (
  <Headline level={1} className={styles.articleHeadline}>
    {children}
  </Headline>
);

export default ArticleHeadline;

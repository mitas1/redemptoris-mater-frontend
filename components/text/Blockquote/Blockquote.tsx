import { FC } from "react";

import classNames from "classnames";

import styles from "./Blockquote.module.css";

const Paragraph: FC = ({ children }) => (
  <blockquote className={classNames(styles.blockquote)}>{children}</blockquote>
);

export default Paragraph;

import { FC } from "react";

import styles from "./Overline.module.css";

const Overline: FC = ({ children }) => (
  <span className={styles.overline}>{children}</span>
);

export default Overline;

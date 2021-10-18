import { FC } from "react";

import classNames from "classnames";

import styles from "./Divider.module.css";

interface DividerProps {
  vertical?: boolean;
  className?: string;
}

const Divider: FC<DividerProps> = ({ vertical, children, className }) => (
  <div
    className={classNames(
      styles.root,
      className,
      vertical ? styles.vertical : styles.horizontal
    )}
  >
    {children}
  </div>
);

export default Divider;

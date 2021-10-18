import { FC } from "react";

import classNames from "classnames";

import styles from "./CenterBox.module.css";

interface CenterBoxProps {
  rootClassName?: string;
  className?: string;
}

const CenterBox: FC<CenterBoxProps> = ({
  rootClassName,
  className,
  children,
}) => (
  <div className={rootClassName}>
    <div className={classNames(className, styles.centerBox)}>{children}</div>
  </div>
);

export default CenterBox;

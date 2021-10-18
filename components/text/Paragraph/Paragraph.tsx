import { FC } from "react";

import classNames from "classnames";

import { ClassName } from "../utils/classname";
import {
  Inversable,
  useInversable,
} from "../utils/inverse";
import {
  Spacing,
  useSpacing,
} from "../utils/spacing";
import styles from "./Paragraph.module.css";

const Paragraph: FC<Inversable & Spacing & ClassName> = ({
  children,
  inverse,
  ignoreSpacing,
  className,
}) => {
  const inverseClassName = useInversable(inverse);
  const spacingClassName = useSpacing(false, ignoreSpacing);
  return (
    <p
      className={classNames(
        styles.paragraph,
        className,
        inverseClassName,
        spacingClassName
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;

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
import styles from "./Headline.module.css";

interface HeadlineProps extends Inversable, Spacing, ClassName {
  level: 1 | 2 | 3 | 4;
  style?: 1 | 2 | 3 | 4;
}

const Headline: FC<HeadlineProps> = ({
  level,
  style = level,
  inverse,
  children,
  ignoreSpacing,
  className,
}) => {
  const Component = `h${level}` as "h1" | "h2" | "h3" | "h4";

  const inverseClassName = useInversable(inverse);
  const spacingClassName = useSpacing(true, ignoreSpacing);

  return (
    <Component
      className={classNames(
        className,
        `headline-${style}`,
        inverseClassName,
        spacingClassName,
        styles.headline,
        inverse && styles.inverse
      )}
    >
      {children}
    </Component>
  );
};

export default Headline;

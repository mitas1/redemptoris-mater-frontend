import {
  FC,
  ReactNode,
} from "react";

import classNames from "classnames";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

import styles from "./Link.module.css";

export interface LinkProps extends NextLinkProps {
  style?: "link" | "button";
  iconSuffix?: ReactNode;
  iconPrefix?: ReactNode;
  className?: string;
}

const Link: FC<LinkProps> = ({
  style = "link",
  children,
  className,
  iconPrefix,
  iconSuffix,
  ...linkProps
}) => {
  return (
    <NextLink {...linkProps}>
      <a
        className={classNames(styles.root, "inline-flex", className, {
          [styles.link]: style === "link",
          [styles.button]: style === "button",
        })}
      >
        {iconPrefix && <span className="mr-4">{iconPrefix}</span>}
        {children}
        {iconSuffix && <span className="ml-4">{iconSuffix}</span>}
      </a>
    </NextLink>
  );
};

export default Link;

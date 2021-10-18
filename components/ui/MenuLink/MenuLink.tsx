import { FC } from "react";

import classNames from "classnames";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

import styles from "./MenuLink.module.css";

export interface LinkProps extends NextLinkProps {
  style?: "button" | "link";
  className?: string;
  active?: boolean;
}

const MenuLink: FC<LinkProps> = ({
  style = "link",
  children,
  active,
  className,
  ...linkProps
}) => {
  return (
    <NextLink {...linkProps}>
      <a
        className={classNames(styles.root, className, {
          [styles.button]: style === "button",
          [styles.active]: active,
        })}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default MenuLink;

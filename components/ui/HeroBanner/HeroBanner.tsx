import { FC } from "react";

import classNames from "classnames";
import Image from "next/image";

import { CenterBox } from "../CenterBox";
import styles from "./HeroBanner.module.css";

export interface HeroBannerProps {
  image: string;
  contentClassName?: string;
  box?: boolean;
}

const HeroBanner: FC<HeroBannerProps> = ({
  image,
  contentClassName,
  children,
}) => (
  <div className={styles.root}>
    <Image src={image} layout="fill" objectFit="cover" />
    <CenterBox
      rootClassName={styles.centerBoxRoot}
      className={styles.centerBox}
    >
      <div className={classNames(styles.content, contentClassName)}>
        {children}
      </div>
    </CenterBox>
  </div>
);

export default HeroBanner;

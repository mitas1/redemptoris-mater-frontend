import { FC } from "react";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import {
  Headline,
  Overline,
  Paragraph,
} from "@components/text";
import { ArrowLink } from "@components/ui";
import { formatDate } from "@utils/date";

import styles from "./ArticleFragment.module.css";

interface ArticleFragmentProps {
  layout?: "normal" | "image";
  href: string;
  title: string;
  body: string;
  publishedAt: string;
  image?: string;
  author?: string;
}

const ArticleFragment: FC<ArticleFragmentProps> = ({
  layout = "normal",
  author,
  href,
  publishedAt,
  image,
  body,
  title,
}) => {
  const hasImage = !!image;

  const metaInfo = (
    <Overline>
      {formatDate(publishedAt)}
      {author && (
        <>
          <span className={styles.dot}>·</span>
          {author}
        </>
      )}
    </Overline>
  );

  return (
    <article
      className={classNames(
        styles.article,
        layout === "image" && styles.imageLayout
      )}
    >
      {layout === "normal" && metaInfo}
      {layout === "image" &&
        (hasImage ? (
          <Link href={href}>
            <a className={styles.imageTile}>
              <Image
                src={image}
                layout="fill"
                objectFit="cover"
                alt="Obrázok článku"
              />
            </a>
          </Link>
        ) : (
          <div className={styles.imageTile} />
        ))}
      <div>
        <Link href={href}>
          <a>
            <Headline
              className={styles.title}
              level={2}
              style={3}
              ignoreSpacing
            >
              {title}
            </Headline>
          </a>
        </Link>
        <Paragraph className={styles.paragraph} ignoreSpacing>
          {body}
        </Paragraph>
        {layout === "normal" ? (
          <ArrowLink href={href} className={styles.readMore}>
            {"Čítať viac"}
          </ArrowLink>
        ) : (
          metaInfo
        )}
      </div>
    </article>
  );
};
export default ArticleFragment;

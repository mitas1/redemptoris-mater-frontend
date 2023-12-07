import Link from 'next/link';
import { useParallax } from 'react-scroll-parallax';

import Image from 'next/image';

import styles from './Banner.module.css';
import { ContentBox } from '../ContentBox/ContentBox';

const Banner = ({ title, body, slug }) => {
  const { ref } = useParallax<HTMLImageElement>({ speed: -30 });

  return (
    <div className={styles.root}>
      <Image
        priority
        ref={ref}
        style={{
          objectFit: 'cover',
        }}
        fill
        src="/images/icon.jpg"
        alt="Ikona kristovej tváre (Kiko Arguello)"
      />
      <ContentBox className={styles.content}>
        <h1 className={styles.headline}>{title}</h1>
        <span className={styles.text}>{body}</span>
        <Link href={`/articles/${slug.current}`} className={styles.link}>
          <span>Čítať viac</span>
          <img src="/images/arrow.svg" alt="Čítať viac" />
        </Link>
      </ContentBox>
    </div>
  );
};

export default Banner;

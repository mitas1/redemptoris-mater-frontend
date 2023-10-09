import Link from 'next/link';
import { useParallax } from 'react-scroll-parallax';

import { PRIMARY_FONT } from '../constants';
import Image from 'next/image';

const CONTENT_WIDTH = '1100px';
const BANER_HEIGHT = '600px';

const Baner = ({ title, body, slug }) => {
  const { ref } = useParallax<HTMLImageElement>({ speed: -30 });

  return (
    <div>
      <div className="banner">
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
        <div className="baner-heading-wrapper">
          <h1 className="baner-heading">{title}</h1>
          <span className="baner-text">{body}</span>
          <Link href={`/articles/${slug.current}`} className="baner-button">
            <span>Čítať viac</span>
            <img src="/images/arrow.svg" alt="Čítať viac" />
          </Link>
        </div>
        <style jsx>{`
          .banner {
            height: 600px;
            position: relative;
            overflow: hidden;
          }
          .baner-heading-wrapper {
            width: ${CONTENT_WIDTH};
            height: ${BANER_HEIGHT};
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 auto;
          }
          .baner-heading {
            color: #fff;
            font-size: 40px;
            font-family: ${PRIMARY_FONT};
            font-weight: 700;
            line-height: 1.2;
            padding: 0 0 0 0;
            position: relative;
            width: 400px;
          }
          .baner-text {
            color: #fff;
            padding: 16px 0 56px 0;
            position: relative;
            display: block;
            width: 500px;
            line-height: 1.8;
            font-size: 14px;
          }
          :global(.baner-button) {
            align-items: center;
            background-color: #fff;
            border-radius: 3px;
            color: #0c1a24;
            display: flex;
            font-family: 'Roboto', sans-serif;
            font-size: 15px;
            height: 56px;
            justify-content: space-between;
            padding: 0 32px;
            position: relative;
            text-decoration: none;
            transition: all 0.2s;
            width: 150px;
          }
          :global(.baner-button):hover {
            box-shadow: 0 1px 5px #777;
            cursor: pointer;
          }
          @media screen and (max-width: 992px) {
            .baner-heading-wrapper {
              width: 100%;
              padding: 0 24px;
              box-sizing: border-box;
            }
            .baner-heading {
              width: 100%;
              box-sizing: border-box;
            }
            .baner-text {
              width: 100%;
              font-weight: 500;
              padding: 16px 48px 56px 0;
              box-sizing: border-box;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Baner;

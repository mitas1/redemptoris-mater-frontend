import React from 'react';

import Head from 'next/head';

import Drawer from '@material/react-drawer';

import {
  PAGE_TITLE,
  SECONDARY_FONT,
} from '../constants';
import { GA_TRACKING_ID } from '../lib/gtag';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';

const Layout = ({ children }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="content">
      <Head>
        <meta charSet="UTF-8" />
        <title>{PAGE_TITLE}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Martel:600,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          key="favicon-ico"
        />
        <link
          rel="icon"
          href="/images/favicon-48x48.png"
          sizes="48x48"
          key="favicon-48x48"
        />
        <link
          rel="icon"
          href="/images/favicon-96x96.png"
          sizes="96x96"
          key="favicon-96x96"
        />
        <link
          rel="icon"
          href="/images/favicon-144x144.png"
          sizes="144x144"
          key="favicon-144x144"
        />

        <meta
          name="google-site-verification"
          content="4cQQ95yeqzUWnoWNvYC0hfDr39TwAMCkiE_H43OBXaA"
        />
        <meta
          name="description"
          content="Diecézny misijný medzinárodný seminár Redemptoris Mater v Žiline."
        />
        <meta
          name="keywords"
          content="Redemptoris Mater, Žilina, Seminár, Slovensko,
                        sk, Diecézny misijný seminár, neokatechumenátna cesta, Slovakia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          key="gtag-script"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          key="gtag-script-2"
          dangerouslySetInnerHTML={{
            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                        });
                    `,
          }}
        />
      </Head>
      <Drawer
        modal
        open={open}
        onClose={() => setOpen(false)}
        className="drawer"
      >
        <Menu smartphone closeDrawer={() => setOpen(false)} />
      </Drawer>
      <Header handleDrawer={() => setOpen(!open)} />
      <main className="content-wrapper">{children}</main>
      <Footer />
      <style jsx>{`
        .content {
          background-color: #fff;
          display: block;
          position: relative;
        }
        .content-wrapper {
          padding-top: 80px;
        }
        .drawer {
          z-index: 10;
          flex-direction: unset !important;
        }
      `}</style>
      <style global jsx>
        {`
          * {
            margin: 0;
            padding: 0;
          }
          html {
            font-family: ${SECONDARY_FONT};
          }
          @supports (font-variation-settings: normal) {
            html {
              font-family: ${SECONDARY_FONT};
            }
          }
          #nprogress {
            pointer-events: none;
            position: relative;
            z-index: 9999999;
          }
          #nprogress .bar {
            background: #29d;
            height: 2px;
            left: 0;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1031;
            z-index: 3;
          }
          #nprogress .peg {
            -ms-transform: rotate(3deg) withNamespaces(0px, -4px);
            -webkit-transform: rotate(3deg) withNamespaces(0px, -4px);
            box-shadow: 0 0 10px #29d, 0 0 5px #29d;
            display: block;
            height: 100%;
            opacity: 1;
            position: absolute;
            right: 0px;
            transform: rotate(3deg) withNamespaces(0px, -4px);
            width: 100px;
            z-index: 3;
          }
        `}
      </style>
    </div>
  )
}

export default Layout

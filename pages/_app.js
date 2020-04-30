import React from "react";
import Head from 'next/head';
import App from "next/app";
import NProgress from "nprogress";
import Router from "next/router";

import "@material/react-drawer/dist/drawer.css";
import "react-image-lightbox/style.css";

Router.events.on("routeChangeStart", url => {
    NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <meta charSet="UTF-8"/>
                    <title>Redemptoris mater</title>
                    <link
                        href="https://fonts.googleapis.com/css?family=Martel:600,700,900&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" href="/images/favicon-48x48.png" sizes="48x48" />
                    <link rel="icon" href="/images/favicon-96x96.png" sizes="96x96" />
                    <link rel="icon" href="/images/favicon-144x144.png" sizes="144x144" />

                    <meta name="google-site-verification"
                        content="4cQQ95yeqzUWnoWNvYC0hfDr39TwAMCkiE_H43OBXaA" />
                    <meta name="description"
                        content="Diecézny misijný medzinárodný seminár Redemptoris Mater v Žiline." />
                    <meta name="keywords" content="Redemptoris Mater, Žilina, Seminár" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                </Head>
                <Component {...pageProps} />
            </>
        );
    }
}

import React from "react";
import Head from "next/head";
import sanity from "../lib/sanity";

import Layout from "../components/Layout";
import { Donation } from "./index";
import { PAGE_TITLE } from "../constants";

const Articles = ({url}) => {
    return (
        <Layout>
            <Head>
                <title>{`Podporte nás | ${PAGE_TITLE}`}</title>
            </Head>
            <Donation file={url} />
        </Layout>
    );
};

Articles.getInitialProps = async () => {
    return await sanity.fetch(`
        *[_type == 'settings'][0] {
            "url": donationForm.asset->url
        }`);
};

export default Articles;

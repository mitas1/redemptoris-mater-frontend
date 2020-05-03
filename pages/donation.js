import React from "react";
import Head from "next/head";
import sanity from "../lib/sanity";

import Layout from "../components/Layout";
import { Donation } from "./index";
import { PAGE_TITLE } from "../constants";
import { IBAN } from "../constants/contact";

const Articles = ({url}) => {
    return (
        <Layout>
            <Head>
                <title>{`Podporte nás | ${PAGE_TITLE}`}</title>
                <meta name="description" content={`Podporiť nás môžete poukázaním 2% z dane, každý rok, začiatkom roka, alebo platbou na účet: ${IBAN}`} />
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

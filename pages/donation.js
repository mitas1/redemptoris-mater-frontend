import React from "react";
import sanity from "../lib/sanity";

import Layout from "../components/Layout";
import { Donation } from "./index";

const Articles = ({url}) => {
    return (
        <Layout>
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

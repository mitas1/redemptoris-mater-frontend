import React from 'react';

import Head from 'next/head';

import Layout from '../components/Layout';
import { PAGE_TITLE } from '../constants';
import { IBAN } from '../constants/contact';
import sanity from '../lib/sanity';
import { Donation as CDonation } from './index';

const Donation = ({ url }) => {
  return (
    <Layout>
      <Head>
        <title>{`Podporte nás | ${PAGE_TITLE}`}</title>
        <meta
          name="description"
          key="description"
          content={`Podporiť nás môžete poukázaním 2% z dane, každý rok, začiatkom roka, alebo platbou na účet: ${IBAN}`}
        />
      </Head>
      <CDonation file={url} />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: await sanity.fetch(`
        *[_type == 'settings'][0] {
            "url": donationForm.asset->url
        }`),
    revalidate: 5,
  }
}

export default Donation

import React, { FC } from "react";

import Head from "next/head";

import {
  DonationFormHeroBanner,
  Layout,
} from "@components/common";
import { createSanityApi } from "@lib/sanity/api";
import type { DonationForm as TDonationForm } from "@lib/sanity/types";

import { PAGE_TITLE } from "../constants";
import { IBAN } from "../constants/contact";

interface DonationFormProps {
  donationForm: TDonationForm;
}

const Donation: FC<DonationFormProps> = ({ donationForm }) => {
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
      <DonationFormHeroBanner file={donationForm.url} />
    </Layout>
  );
};

export async function getStaticProps() {
  const sanityApi = createSanityApi();
  const donationForm = await sanityApi.getDonationForm();

  return {
    donationForm,
    revalidate: 5,
  };
}

export default Donation;

import React from "react";

import Head from "next/head";

import { Layout } from "@components/common";

import { PAGE_TITLE } from "../constants";
import {
  CONTACT_EMAIL,
  CONTACT_NUMBER,
  CONTACT_PERSON,
  IBAN,
} from "../constants/contact";

const Contact = () => (
  <Layout>
    <Head>
      <title>{`Kontakt | ${PAGE_TITLE}`}</title>
      <meta
        name="description"
        content={`Rektor seminára ${CONTACT_PERSON}, Tel.:${CONTACT_NUMBER}, Email: ${CONTACT_EMAIL}, IBAN: ${IBAN}, Adresa: Mokrohájska cesta 6 841 04 Bratislava`}
      />
    </Head>
  </Layout>
);

export default Contact;

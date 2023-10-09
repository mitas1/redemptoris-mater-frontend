import React from 'react';

import Head from 'next/head';

import { Wrapper } from '../components/Article';
import Content from '../components/Content';
import {
  Column1,
  Column11,
  Column2,
  Column3,
} from '../components/Footer';
import Heading, { SubHeading } from '../components/Heading';
import Layout from '../components/Layout';
import { PAGE_TITLE } from '../constants';
import {
  CONTACT_EMAIL,
  CONTACT_NUMBER,
  CONTACT_PERSON,
  IBAN,
} from '../constants/contact';

const CircleIcon = ({ src }) => (
  <div className="wrapper">
    <img src={src} alt="Ikona" />
    <style jsx>{`
      .wrapper {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        float: left;
      }
    `}</style>
  </div>
)

const Contact = () => (
  <Layout>
    <Head>
      <title>{`Kontakt | ${PAGE_TITLE}`}</title>
      <meta
        name="description"
        content={`Rektor seminára ${CONTACT_PERSON}, Tel.:${CONTACT_NUMBER}, Email: ${CONTACT_EMAIL}, IBAN: ${IBAN}, Adresa: Súľovská 11 949 01 Nitra`}
      />
    </Head>
    <Content>
      <Wrapper>
        <Heading withSpacing title="Kontakt" level={2}></Heading>
      </Wrapper>
      <div className="column-wrapper">
        <div className="column">
          <CircleIcon src="/images/tel.svg" />
          <div className="column-content">
            <SubHeading title="Kontakt" />
            <Column1 />
            <p className="paragraph"></p>
            <SubHeading title="Číslo účtu" />
            <Column11 />
          </div>
        </div>
        <div className="column">
          <CircleIcon src="/images/home.svg" />
          <div className="column-content">
            <SubHeading title="Sídlo" />
            <Column2 />
          </div>
        </div>
        <div className="column">
          <CircleIcon src="/images/location.svg" />
          <div className="column-content">
            <SubHeading title="Kde nás teraz nájdete" />
            <Column3 />
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1330.321095351361!2d17.068374358224744!3d48.174976994806606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8c707df6278b%3A0xfde437e1bd0b8935!2sSemin%C3%A1r%20Redemptoris%20Mater%20%C5%BDilina!5e0!3m2!1sen!2ssk!4v1570287733239!5m2!1sen!2ssk"
          width={1150}
          height={550}
          frameBorder={0}
          allowFullScreen={true}
        ></iframe>
      </div>
      <style jsx>
        {`
          .column-wrapper {
            display: flex;
            margin: 0 auto;
          }
          .column {
            flex: 1;
            display: flex;
          }
          .column-content {
            float: left;
            width: 260px;
            font-family: "Roboto", sans-serif;
            font-size: 14px;
            line-height: 1.4;
            margin: 0 0 0 20px;
          }
          .paragraph {
            margin: 0 0 20px;
          }
          .map {
            background-color: #e5e3df;
            margin: 40px auto;
            height: 550px;
          }
          .map iframe {
            border: 0;
          }
          @media screen and (max-width: 992px) {
            .column-wrapper {
              flex-direction: column;
            }
            .column {
              margin: 24px 0;
            }
            .column-content {
              font-size: 16px;
            }
            .map {
              width: 100%;
              height: auto;
            }
            .map iframe {
              width: 100%;
              height: 300px;
            }
          }
        `}
      </style>
    </Content>
  </Layout>
)

export default Contact

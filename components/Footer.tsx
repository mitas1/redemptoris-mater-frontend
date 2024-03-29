import { FC } from 'react';

import {
  CONTACT_EMAIL,
  CONTACT_NUMBER,
  IBAN,
} from '../constants/contact';
import Heading from './Heading';

const Column = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        font-size: 14px;
        line-height: 1.5;
      }
    `}</style>
  </div>
)

export const Column1 = () => (
  <Column>
    <p>Rektor seminára Ján Hlávka</p>
    <p>
      Tel.:{" "}
      <a href={`tel:${CONTACT_NUMBER}`} className="link">
        {CONTACT_NUMBER}
      </a>
    </p>
    <p>
      Email:{" "}
      <a href={`mailto:${CONTACT_EMAIL}`} className="link">
        {CONTACT_EMAIL}
      </a>
    </p>
    <style jsx>{`
      .link {
        color: #000;
      }
    `}</style>
  </Column>
)

export const Column11: FC<{ show?: boolean }> = ({ show = false }) => (
  <Column>
    {show && <p>Číslo účtu:</p>}
    <strong>{IBAN}</strong>
    <br />
    BIC (SWIFT): <strong>SUBASKBX</strong>
    <br />
    Názov účtu: <strong>Seminar RM</strong>
  </Column>
)

export const Column2 = () => (
  <Column>
    Mariánske námestie 23
    <br />
    010 01 Žilina
  </Column>
)

export const Column3 = () => (
  <Column>
    Súľovská 11<br />
    949 01 Nitra
  </Column>
)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <Heading title="Kontakt" level={4} />
        <Column1 />
        <br />
        <Column11 show />
      </div>
      <div className="footer-column">
        <Heading title="Sídlo" level={4} />
        <Column2 />
      </div>
      <div className="footer-column">
        <Heading title="Kde nás teraz nájdete" level={4} />
        <Column3 />
      </div>
      <div className="footer-column" />
      <style jsx>
        {`
          .footer {
            width: 1100px;
            display: flex;
            margin: 100px auto 80px auto;
          }
          .footer-column {
            flex: 1;
          }
          .download-link {
            cursor: not-allowed;
          }
          @media screen and (max-width: 992px) {
            .footer {
              flex-direction: column;
              width: 100%;
              padding: 0 24px;
              margin: 36px auto 100px auto;
              box-sizing: border-box;
            }
          }
        `}
      </style>
    </footer>
  )
}

export default Footer

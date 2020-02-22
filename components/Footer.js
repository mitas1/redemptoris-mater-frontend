import Heading from "./Heading";

import {CONTACT_NUMBER, IBAN, CONTACT_EMAIL} from '../constants/contact';

export const Column1 = () => (
    <>
        <p>Rektor seminára Ján Hlávka</p>
        <p>Tel.:{" "}<a href={`tel:${CONTACT_NUMBER}`} className='link'>{CONTACT_NUMBER}</a></p>
        <p>Email:{" "}<a href={`mailto:${CONTACT_EMAIL}`} className='link'>{CONTACT_EMAIL}</a></p>
        <style jsx>{`
            .link {
                color: #000;
            }
        `}</style>
    </>
);

export const Column2 = () => (
    <>
        <p>Mariánske námestie 23</p>
        <p>010 01 Žilina</p>
    </>
);

export const Column3 = () => (
    <>
        <p>Mokrohájska cesta 6</p>
        <p>841 04 Bratislava</p>
    </>
)

export default () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <Heading title="Kontakt" level={4} />
                <Column1/>
                <br/>
                <p>Číslo účtu:<br/>{IBAN}</p>
            </div>
            <div className="footer-column">
                <Heading title="Sídlo" level={4} />
                <Column2/>
            </div>
            <div className="footer-column">
                <Heading title="Kde nás teraz nájdete" level={4} />
                <Column3/>
            </div>
            <div className="footer-column"/>
            <style>
                {`
                .footer {
                    width: 1100px;
                    display: flex;
                    margin: 100px auto 80px auto;
                }
                .footer-column {
                    flex:1;
                }
                .download-link {
                    cursor: not-allowed;
                }
                .footer p {
                    font-size: 14px;
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
            `}</style>
        </footer>
    );
};

import Heading from "./Heading";

export default () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <Heading title="Kontakt" level={4} />
                <p>Rektor seminára Ján Hlávka</p>
                <p>Ján Hlávka: +421 914 139 062</p>
                <br />
                <p>{"rm.zilina@gmail.com"}</p>
            </div>
            <div className="footer-column">
                <Heading title="Sídlo" level={4} />
                <p>Mariánske námestie 23</p>
                <p>010 01 Žilina</p>
                <br />
                <p>Číslo účtu: 2921892145/1100</p>
            </div>
            <div className="footer-column">
                <Heading title="Kde nás teraz nájdete" level={4} />
                <p>Mokrohájska cesta 6</p>
                <p>841 04 Bratislava</p>
            </div>
            <div className="footer-column" />
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

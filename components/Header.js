import Menu from "./Menu";
import { PRIMARY_FONT } from "../constants";

export default ({ title, handleDrawer, handleDrawerClose }) => (
    <div className="wrapper">
        <a href="/" className="logo">
            <img src="/images/logo.svg" />
        </a>
        <div className="title">
            Diecézny misijný seminár v Žiline
            <br />
            <strong>Redemptoris Mater</strong>
        </div>
        <a className="smartphone-menu" onClick={handleDrawer}>
            <img src="/images/menu.svg" />
        </a>
        <div className="menu">
            <Menu closeDrawer={handleDrawerClose} />
        </div>
        <style jsx>{`
            .wrapper {
                top: 0;
                width: 100%;
                z-index: 2;
                height: 80px;
                position: fixed;
                background-color: #fff;
                display: flex;
                align-items: center;
                justify-content: space-around;
                padding: 0 64px;
                box-sizing: border-box;
                box-shadow: 0px -10px 20px #aaa;
            }
            .logo {
                width: 80px;
                height: 80px;
                padding: 12px;
                float: left;
                box-sizing: border-box;
            }
            .title {
                font-size: 14px;
                flex: 1 0 auto;
                font-family: ${PRIMARY_FONT};
                margin: 0 16px;
            }
            .menu {
                flex: 0 1 auto;
            }
            .smartphone-menu {
                display: none;
            }
            @media screen and (max-width: 992px) {
                .smartphone-menu {
                    display: flex;
                    width: 48px;
                    height: 48px;
                }
                .menu {
                    display: none;
                }
                .wrapper {
                    padding: 0 24px;
                }
            }
        `}</style>
    </div>
);

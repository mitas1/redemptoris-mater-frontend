import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

import Drawer from "@material/react-drawer";

import "@material/react-drawer/dist/drawer.css";
import { PRIMARY_FONT, SECONDARY_FONT } from "../constants";

export default ({ children }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="content">
            <Drawer
                modal
                open={open}
                onClose={() => setOpen(false)}
                className="drawer"
            >
                <Menu smartphone closeDrawer={() => setOpen(false)} />
            </Drawer>
            <Header title="test" handleDrawer={() => setOpen(!open)} />
            <main className="content-wrapper">{children}</main>
            <Footer />
            <style jsx>{`
                .content {
                    background-color: #fff;
                    display: block;
                    position: relative;
                }
                .content-wrapper {
                    padding-top: 80px;
                }
                .drawer {
                    z-index: 10;
                    flex-direction: unset !important;
                }
            `}</style>
            <style global jsx>
                {`
                    * {
                        margin: 0;
                        padding: 0;
                    }
                    html {
                        font-family: ${SECONDARY_FONT};
                    }
                    @supports (font-variation-settings: normal) {
                        html {
                            font-family: ${SECONDARY_FONT};
                        }
                    }
                    #nprogress {
                        pointer-events: none;
                        position: relative;
                        z-index: 9999999;
                    }
                    #nprogress .bar {
                        background: #29d;
                        height: 2px;
                        left: 0;
                        position: fixed;
                        top: 0;
                        width: 100%;
                        z-index: 1031;
                        z-index: 3;
                    }
                    #nprogress .peg {
                        -ms-transform: rotate(3deg) withNamespaces(0px, -4px);
                        -webkit-transform: rotate(3deg)
                            withNamespaces(0px, -4px);
                        box-shadow: 0 0 10px #29d, 0 0 5px #29d;
                        display: block;
                        height: 100%;
                        opacity: 1;
                        position: absolute;
                        right: 0px;
                        transform: rotate(3deg) withNamespaces(0px, -4px);
                        width: 100px;
                        z-index: 3;
                    }
                `}
            </style>
        </div>
    );
};

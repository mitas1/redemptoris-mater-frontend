import React, { FC } from "react";

import Head from "next/head";

import {
  Header,
  Menu,
} from "@components/common";
import { Sidebar } from "@components/ui";
import { PAGE_TITLE } from "@constants";

const Layout: FC = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{PAGE_TITLE}</title>
        <meta
          name="description"
          content="Diecézny misijný medzinárodný seminár Redemptoris Mater v Žiline."
          key="description"
        />
        <meta
          name="keywords"
          content="Redemptoris Mater, Žilina, Seminár, Slovensko, sk, Diecézny misijný seminár, neokatechumenátna cesta, Slovakia"
          key="keywords"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {open ? (
        <Sidebar className="bg-gray-800" onClose={() => setOpen(false)}>
          <Menu closeDrawer={() => setOpen(false)} />
        </Sidebar>
      ) : null}
      <Header handleDrawer={() => setOpen(!open)} />
      <main className="mt-20">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;

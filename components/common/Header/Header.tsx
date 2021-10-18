import { FC } from "react";

import Link from "next/link";

import { Menu } from "../";
import styles from "./Header.module.css";

export interface Props {
  handleDrawer: () => void;
  handleDrawerClose?: () => void;
}

const Header: FC<Props> = ({ handleDrawer, handleDrawerClose }) => (
  <div className={styles.wrapper}>
    <Link href="/">
      <a className="flex items-center space-x-6">
        <img
          src="/images/logo.svg"
          className="w-12 h-12 sm:w-14 sm:h-14"
          alt="Logo"
        />
        <div className="font-serif text-xs sm:text-sm">
          Diecézny misijný seminár v Žiline
          <br />
          <strong>Redemptoris Mater</strong>
        </div>
      </a>
    </Link>
    <a className="sm:hidden" onClick={handleDrawer}>
      <img src="/images/menu.svg" className="icon" alt="Menu" />
    </a>
    <Menu
      className="hidden sm:flex"
      closeDrawer={handleDrawerClose ? handleDrawerClose : () => {}}
    />
  </div>
);

export default Header;

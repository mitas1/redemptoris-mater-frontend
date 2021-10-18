import classNames from "classnames";
import { useRouter } from "next/router";

import { Button } from "@components/ui";
import { MenuLink } from "@components/ui/MenuLink";

import styles from "./Menu.module.css";

export interface Props {
  className?: string;
  closeDrawer: () => void;
}

const MENU_ITEMS = [
  {
    href: "/",
    label: "Domov",
  },
  {
    href: "/articles",
    label: "Naše dejiny",
  },
  {
    href: "/contact",
    label: "Kontakt",
  },
];

const Menu = ({ closeDrawer, className }: Props) => {
  const { pathname } = useRouter();

  const isIndexPath = pathname === "/";

  const handleClick = () => {
    // TODO
    if (closeDrawer) {
      closeDrawer();
    }
  };

  return (
    <div className={classNames("flex", className)}>
      {MENU_ITEMS.map((item, index) => (
        <MenuLink key={index} href={item.href} className={styles.menuLink}>
          {item.label}
        </MenuLink>
      ))}
      {isIndexPath ? (
        <Button className={styles.menuLink} onClick={handleClick}>
          Chcem podporiť
        </Button>
      ) : (
        <MenuLink className={styles.menuLink} href="/donation" style="button">
          Chcem podporiť
        </MenuLink>
      )}
    </div>
  );
};

export default Menu;

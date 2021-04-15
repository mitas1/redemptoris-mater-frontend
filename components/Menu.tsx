import Link from 'next/link';
import { useRouter } from 'next/router';
import Scroll from 'react-scroll';

export interface Props {
  smartphone?: boolean
  closeDrawer: () => void
}

const scroller = Scroll.scroller

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
]

const Menu = ({ smartphone, closeDrawer }: Props) => {
  const { pathname } = useRouter()

  const handleClick = () => {
    if (closeDrawer) {
      closeDrawer()
    }
    scroller.scrollTo("donation", {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -90,
    })
  }

  const isIndexPage = pathname === "/"

  return (
    <div className={`${smartphone && "smartphone"} menu`}>
      {MENU_ITEMS.map((item, index) => (
        <Link key={index} href={item.href}>
          <a
            tabIndex={0}
            className={pathname === item.href ? "item active" : "item"}
          >
            {item.label}
          </a>
        </Link>
      ))}
      {isIndexPage ? (
        <a onClick={handleClick} className="item-accent">
          Chcem podporiť
        </a>
      ) : (
        <Link href="/donation">
          <a className="item-accent">Chcem podporiť</a>
        </Link>
      )}
      <style jsx>{`
        .smartphone {
          display: flex;
          flex-direction: column;
        }
        .item-accent,
        .item {
          outline: none;
          text-decoration: none;
          letter-spacing: 0.03em;
          color: #757575;
          font-size: 12px;
          margin: 0 8px;
          text-transform: uppercase;
          padding: 24px 8px;
        }
        .item.active,
        .item:hover {
          color: #000;
        }
        .item-accent {
          padding: 16px 24px;
          background-color: #000;
          border-radius: 3px;
          color: #fff;
          align-self: flex-start;
        }
        @media screen and (max-width: 992px) {
          .menu {
            margin: 16px 0;
          }
          .item {
            padding: 16px 8px;
          }
          .item-accent {
            margin: 8px 0 0 16px;
          }
        }
      `}</style>
    </div>
  )
}

export default Menu

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
    <div className={`${smartphone ? "smartphone" : ''} menu`}>
      {MENU_ITEMS.map((item, index) => (
        <Link key={index} href={item.href} tabIndex={0}
          className={pathname === item.href ? "item active" : "item"}>
            {item.label}
        </Link>
      ))}
      {isIndexPage ? (
        <a onClick={handleClick} className="item-accent">
          Chcem podporiť
        </a>
      ) : (
        <Link href="/donation" className="item-accent">
          Chcem podporiť
        </Link>
      )}
      <style jsx>{`
        .smartphone {
          display: flex;
          flex-direction: column;
        }
        :global(.item-accent),
        :global(.item) {
          outline: none;
          text-decoration: none;
          letter-spacing: 0.03em;
          color: #757575;
          font-size: 12px;
          margin: 0 8px;
          text-transform: uppercase;
          padding: 24px 8px;
        }
        :global(.item.active),
        :global(.item:hover) {
          color: #000;
        }
        :global(.item-accent) {
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
          :global(.item) {
            padding: 16px 8px;
          }
          :global(.item-accent) {
            margin: 8px 0 0 16px;
          }
        }
      `}</style>
    </div>
  )
}

export default Menu

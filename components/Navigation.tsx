import { FC, PropsWithChildren } from 'react';

import Link from 'next/link';

export interface NavLinkProps extends PropsWithChildren {
  href: string
  as: string
  back?: boolean
}

export const NavLink: FC<NavLinkProps> = ({
  href,
  children,
  back = false,
}) => (
  <Link href={href} className="link">
      {back && <img height={8} src="/images/arrow_back.svg" alt="Šípka späť" />}
      {children}
      {!back && (
        <img height={8} src="/images/arrow_next.svg" alt="Šípka ďalej" />
      )}
      <style jsx>{`
        .link {
          margin-top: 64px;
          color: #006cb9;
          font-size: 15px;
          font-weight: 400;
          text-decoration: none;
        }
        .link img {
          margin: 0 18px;
        }
      `}</style>
  </Link>
)

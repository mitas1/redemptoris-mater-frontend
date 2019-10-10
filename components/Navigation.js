import Link from "next/link";

export const NavLink = ({ href, children, back }) => (
    <Link href={href}>
        <a className="link">
            {back && <img height={8} src="/static/images/arrow_back.svg" />}
            {children}
            {!back && <img height={8} src="/static/images/arrow_next.svg" />}
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
        </a>
    </Link>
);

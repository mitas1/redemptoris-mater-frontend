import { FC } from 'react';

import Link from 'next/link';
import css from 'styled-jsx/css';

const styles = css`
  .button {
    display: inline-block;
    background-color: #006cb9;
    border-radius: 3px;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    padding: 24px 45px;
    margin: 0 auto;
    text-decoration: none;
  }
  .icon {
    margin: 0 0 0 16px;
  }
  .button.secondary {
    color: #0c1a24;
    border-radius: 3px;
    background-color: #fff;
  }
  .button:hover {
    box-shadow: 0 1px 5px #777;
    cursor: pointer;
  }
`

interface Button {
  className?: string
  href: string
  icon?: string
  secondary?: boolean
}

const Button: FC<Button> = ({
  children,
  className,
  href,
  icon,
  secondary = false,
  ...rest
}) => {
  const classes = ["button"]

  if (className) classes.push(className)
  if (secondary) classes.push("secondary")

  const classStr = classes.join(" ")

  const content = (
    <a {...rest} className={classStr}>
      {children}
      {icon && <i className="icon">{icon}</i>}
      <style jsx>{styles}</style>
    </a>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}

export default Button

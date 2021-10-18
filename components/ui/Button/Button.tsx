import {
  FC,
  ReactNode,
} from "react";

import classNames from "classnames";

import styles from "./Button.module.css";

""

""
interface ButtonProps {
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
  secondary?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  icon,
  secondary = false,
  ...rest
}) => {
  const content = (
    <button {...rest} className={classNames(styles.button, className)}>
      {children}
      {icon}
    </button>
  );

  return content;
};

export default Button;

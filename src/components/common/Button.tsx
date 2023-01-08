import { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
};

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: "button";
  };

type ButtonAsLinkProps = ButtonBaseProps &
  Omit<LinkProps, keyof ButtonBaseProps> & {
    as: "link";
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;
const Button = (props: ButtonProps) => {
  if (props.as === "link") {
    const { children, className, ...rest } = props;
    return (
      <Link className={className} {...rest}>
        {children}
      </Link>
    );
  } else {
    const { children, className, ...rest } = props;
    return (
      <button className={className} {...rest}>
        {children}
      </button>
    );
  }
};

export default Button;

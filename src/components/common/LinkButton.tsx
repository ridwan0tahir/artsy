import { FunctionComponent, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ILinkButton {
  href: string;
  className?: string;
  content: ReactNode;
}

const LinkButton: FunctionComponent<ILinkButton> = ({
  href,
  content,
  className,
}) => {
  return (
    <Link to={href} className={className}>
      {content}
    </Link>
  );
};

export default LinkButton;

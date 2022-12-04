import { FunctionComponent, MouseEventHandler, ReactNode } from "react";

interface IButtonIcon {
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  content: ReactNode;
}

const ButtonIcon: FunctionComponent<IButtonIcon> = ({
  type,
  onClick,
  content,
  className,
}) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {content}
    </button>
  );
};

export default ButtonIcon;

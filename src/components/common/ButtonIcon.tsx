import { FunctionComponent, MouseEventHandler, ReactNode } from "react";

interface IButtonIcon {
  content: ReactNode;
  id?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const ButtonIcon: FunctionComponent<IButtonIcon> = ({
  id,
  content,
  type,
  onClick,
  className,
}) => {
  const config = { id, type, onClick, className };
  return <button {...config}>{content}</button>;
};

export default ButtonIcon;

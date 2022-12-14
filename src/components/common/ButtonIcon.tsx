import { FunctionComponent, MouseEventHandler, ReactNode } from "react";

interface IButtonIcon {
  content: ReactNode;
  disabled?: boolean;
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonIcon: FunctionComponent<IButtonIcon> = ({
  id,
  content,
  type,
  onClick,
  className,
  disabled,
}) => {
  const config = { id, type, onClick, className, disabled };
  return <button {...config}>{content}</button>;
};

export default ButtonIcon;

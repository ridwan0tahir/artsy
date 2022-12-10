import { FunctionComponent, MouseEventHandler, ReactNode } from "react";

interface IButtonIcon {
  content: ReactNode;
  id?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const ButtonIcon: FunctionComponent<IButtonIcon> = (props) => {
  return <button {...props}>{props.content}</button>;
};

export default ButtonIcon;

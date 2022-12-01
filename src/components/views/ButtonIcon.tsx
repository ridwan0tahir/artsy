import { FunctionComponent, MouseEventHandler, ReactNode } from "react";

interface IButtonIcon {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  content: ReactNode;
}

const ButtonIcon: FunctionComponent<IButtonIcon> = ({
  onClick,
  content,
  className,
}) => {
  return (
    <button onClick={onClick} className={className}>
      {content}
    </button>
  );
};

export default ButtonIcon;

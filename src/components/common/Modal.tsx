import { FunctionComponent, ReactNode } from "react";

interface IModal {
  show: boolean;
  close: () => void;
  children: ReactNode;
  title?: string;
}

const Modal: FunctionComponent<IModal> = ({ show, close, children, title }) => {
  return (
    <>
      {show ? (
        <div>
          <div>
            {title && <h3>{title}</h3>}
            <button onClick={() => close()}>close</button>
          </div>
          <div>{children}</div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;

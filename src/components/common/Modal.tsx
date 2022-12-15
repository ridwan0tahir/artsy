import { FunctionComponent, ReactNode } from "react";
import { createPortal } from "react-dom";

interface IModal {
  show: boolean;
  close: () => void;
  children: ReactNode;
  title?: string;
  className?: string;
}

const Modal: FunctionComponent<IModal> = ({
  show,
  close,
  children,
  title,
  className,
}) => {
  return createPortal(
    <>
      {show ? (
        <div className={className}>
          <div>
            {title && <h3>{title}</h3>}
            <button onClick={() => close()}>close</button>
          </div>
          <div>{children}</div>
        </div>
      ) : null}
    </>,
    document.getElementById("modal")!
  );
};

export default Modal;

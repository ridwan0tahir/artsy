import { GrClose } from "react-icons/gr";
import { TbCheck } from "react-icons/tb";
import { FormEvent, FunctionComponent, ReactNode } from "react";
import { createPortal } from "react-dom";
import ButtonIcon from "./ButtonIcon";

interface IModal {
  show: boolean;
  close: () => void;
  children: ReactNode;
  title: string;
  handleSubmit: () => void;
}

const Modal: FunctionComponent<IModal> = ({
  show,
  close,
  children,
  title,
  handleSubmit,
}) => {
  return createPortal(
    <>
      {show ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="fixed bottom-0 left-0 w-full bg-white z-[500] rounded-b 
          rounded-3xl shadow-lg font-satoshi text-black-02 font-medium"
        >
          <div
            className="p-4 border-b-2 border-black-02 flex 
            items-center gap-x-8"
          >
            <ButtonIcon
              type="button"
              onClick={() => close()}
              content={<GrClose size={20} />}
            />
            <h3 className="text-fs-40 font-semibold">{title}</h3>
            <button
              type="submit"
              className="block ml-auto text-fs-30 font-semibold text-blue-01"
            >
              Apply
            </button>
          </div>
          <div className="p-4">{children}</div>
        </form>
      ) : null}
    </>,
    document.getElementById("modal")!
  );
};

export default Modal;

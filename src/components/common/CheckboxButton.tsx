import classNames from "classnames";
import { BsCheck2 } from "react-icons/bs";
import {
  ChangeEvent,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

interface ICheckboxButton extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

const CheckboxButton = ({
  id,
  label,
  checked,
  className,
  ...rest
}: ICheckboxButton) => {
  return (
    <label htmlFor={id} className={className}>
      {label}
      <div
        className="relative w-4 h-4 bg-black-07 rounded-sm 
        flex items-center justify-center"
      >
        <input
          className="absolute right-0 block w-4 h-4 opacity-0 invisible"
          type="checkbox"
          id={id}
          checked={checked}
          {...rest}
        />

        <BsCheck2
          className={classNames("opacity-100 visible", {
            ["opacity-100 visible"]: checked,
            ["opacity-0 invisible"]: !checked,
          })}
          strokeWidth={1}
          size={14}
        />
      </div>
    </label>
  );
};

export default CheckboxButton;

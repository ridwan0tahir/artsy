import classNames from "classnames";
import { BsCheck2 } from "react-icons/bs";
import {
  ChangeEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  useState,
} from "react";

interface IRadioButton extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const RadioButton = ({
  id,
  checked,
  label,
  className,
  ...rest
}: IRadioButton) => {
  return (
    <label htmlFor={id} className={className}>
      {label}
      <div className="relative w-4 h-4">
        <input
          id={id}
          type="radio"
          className="absolute right-0 block w-4 h-4 opacity-0 invisible"
          checked={checked}
          {...rest}
        />

        <BsCheck2
          className={classNames({
            ["opacity-100 visible"]: checked,
            ["opacity-0 invisible"]: !checked,
          })}
          strokeWidth={0.5}
        />
      </div>
    </label>
  );
};

export default RadioButton;

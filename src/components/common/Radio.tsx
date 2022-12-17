import classNames from "classnames";
import { BsCheck2 } from "react-icons/bs";
import { ChangeEvent, useState } from "react";

interface IRadio {
  id: string;
  name: string;
  value?: string | number;
  checked?: boolean;
  label?: string;
  className?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Radio = ({
  id,
  name,
  value,
  checked,
  label,
  className,
  handleChange,
}: IRadio) => {
  return (
    <label htmlFor={id} className={className}>
      {label}
      <div className="relative w-4 h-4">
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          className="absolute right-0 block w-4 h-4 opacity-0 invisible"
          onChange={handleChange}
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

export default Radio;

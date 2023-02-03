import { Dispatch, FunctionComponent, SetStateAction, useState } from 'react';
import Select from 'react-select';

interface IDropdown<T> {
  id: string;
  label: string;
  onSelect: Dispatch<SetStateAction<string>>;
  options: T[];
}
const Dropdown = <T,>({ id, label, onSelect, options }: IDropdown<T>) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id}>{label}</label>
      <Select
        styles={{
          indicatorSeparator: () => ({
            width: '0px',
          }),
          control: (styles, { isFocused }) => ({
            ...styles,
            backgroundColor: 'hsla(0, 0%, 95%, 1)',
            borderColor: 'hsla(0, 0%, 45%, 1)',
            outline: isFocused ? '1px solid hsla(0, 0%, 45%, 1)' : 'none',
            boxShadow: 'none',
            borderRadius: '0.5rem',
          }),
          valueContainer: (styles) => ({
            ...styles,
            padding: '0rem',
          }),
          input: (styles) => ({
            ...styles,
            padding: '0.75rem',
            margin: '0rem',
          }),
          option: (styles, { isSelected }) => ({
            ...styles,
          }),
          singleValue: (styles) => ({
            ...styles,
            paddingInline: '0.5rem',
          }),
        }}
        placeholder=""
        options={options}
        inputId={id}
        onChange={(newValue) => onSelect(newValue!.value)}
      />
      <p></p>
    </div>
  );
};

export default Dropdown;

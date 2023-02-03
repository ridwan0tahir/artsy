import classNames from 'classnames';
import { forwardRef, FunctionComponent, InputHTMLAttributes, Ref } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  error?: string;
}
const Input = forwardRef<HTMLInputElement, IInput>(
  ({ id, label, className, error, ...rest }, ref) => {
    return (
      <div className={classNames(className, 'flex flex-col space-y-2')}>
        <label htmlFor={id}>{label}</label>
        <input
          ref={ref}
          type="text"
          id={id}
          {...rest}
          autoComplete="off"
          className="bg-black-11 p-3 border border-black-12 rounded-lg 
          focus:outline-black-12 focus:outline-2"
        />
        <p>{error}</p>
      </div>
    );
  }
);

export default Input;

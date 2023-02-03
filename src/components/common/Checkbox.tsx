import classNames from 'classnames';
import { BsCheck2 } from 'react-icons/bs';
import { InputHTMLAttributes } from 'react';
import { useToggle } from 'usehooks-ts';

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

const Checkbox = ({ id, label, className, ...rest }: ICheckbox) => {
  const [checked, toggleChecked, _] = useToggle(false);

  return (
    <div className={classNames('flex items-center flex-row gap-2', className)}>
      <div
        className="relative w-4 h-4 bg-black-07 rounded-sm 
        flex items-center justify-center"
      >
        <input
          className="absolute right-0 block w-4 h-4 opacity-0 "
          type="checkbox"
          id={id}
          checked={checked}
          onClick={() => toggleChecked()}
          {...rest}
        />

        <BsCheck2
          className={classNames('opacity-100 visible', {
            ['opacity-100 visible']: checked,
            ['opacity-0 invisible']: !checked,
          })}
          strokeWidth={1}
          size={14}
        />
      </div>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;

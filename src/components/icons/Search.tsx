import ViewIcon from "components/views/ViewIcon";
import { FunctionComponent } from "react";

interface ISearch {
  className?: string;
}
const Search: FunctionComponent<ISearch> = ({ className }) => {
  return (
    <ViewIcon
      path={
        <path
          d="M11.9741 23.947C14.6309 23.9464 17.211 23.0571 19.3038 21.4206L25.8836 28L28 25.8837L21.4202 19.3043C23.0577 17.2114 23.9476 14.6308 23.9483 11.9735C23.9483 5.37161 18.5764 0 11.9741 0C5.37189 0 0 5.37161 0 11.9735C0 18.5754 5.37189 23.947 11.9741 23.947ZM11.9741 2.99337C16.9269 2.99337 20.9547 7.02095 20.9547 11.9735C20.9547 16.926 16.9269 20.9536 11.9741 20.9536C7.02133 20.9536 2.99353 16.926 2.99353 11.9735C2.99353 7.02095 7.02133 2.99337 11.9741 2.99337Z"
          fill="#333333"
        />
      }
      viewBox="0 0 28 28"
      mobileSize={{ width: 16.72, height: 16.72 }}
      laptopSize={{ width: 28, height: 28 }}
      className={className}
    />
  );
};

export default Search;

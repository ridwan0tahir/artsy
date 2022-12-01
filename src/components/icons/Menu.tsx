import ViewIcon from "components/views/ViewIcon";
import { FunctionComponent } from "react";

interface IMenu {
  className?: string;
}

const Menu: FunctionComponent<IMenu> = ({ className }) => {
  return (
    <ViewIcon
      path={
        <path
          d="M1 15.5H20.0312M1 8.25H20.0312M1 1H20.0312"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      }
      mobileSize={{ width: "21", height: "17" }}
      laptopSize={{ width: "0", height: "0" }}
      viewBox="0 0 21 17"
      className={className}
    />
  );
};

export default Menu;

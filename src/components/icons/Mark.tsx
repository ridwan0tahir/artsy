import ViewIcon from "components/common/ViewIcon";
import { FunctionComponent } from "react";

interface ICheck {
  className?: string;
}

const Check: FunctionComponent<ICheck> = ({ className }) => {
  return (
    <ViewIcon
      path={
        <path
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      }
      className={className}
      mobileSize={{ width: 24, height: 24 }}
      laptopSize={{ width: 16, height: 9 }}
      viewBox="0 0 24 24"
    />
  );
};

export default Check;

import ViewIcon from "components/common/ViewIcon";
import { FunctionComponent } from "react";

interface ILongArrow {
  className?: string;
}

const LongArrow: FunctionComponent<ILongArrow> = ({ className }) => {
  return (
    <ViewIcon
      path={
        <path
          d="M667.283 3.28284C667.439 3.12663 667.439 2.87337 667.283 2.71716L664.737 0.171573C664.581 0.0153632 664.328 0.0153632 664.172 0.171573C664.015 0.327783 664.015 0.581048 664.172 0.737258L666.434 3L664.172 5.26274C664.015 5.41895 664.015 5.67222 664.172 5.82843C664.328 5.98464 664.581 5.98464 664.737 5.82843L667.283 3.28284ZM0 3.4H667V2.6H0V3.4Z"
          fill="white"
        />
      }
      className={className}
      viewBox="0 0 668 6"
      mobileSize={{ width: 40, height: 27 }}
      laptopSize={{ width: 668, height: 6 }}
    />
  );
};

export default LongArrow;

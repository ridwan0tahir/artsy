import { FunctionComponent, ReactNode, useLayoutEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

interface ISize {
  width: string | number;
  height: string | number;
}

interface IViewIcon {
  path: ReactNode;
  className?: string;
  mobileSize: ISize;
  laptopSize: ISize;
  viewBox: string;
}

const ViewIcon: FunctionComponent<IViewIcon> = ({
  path,
  className,
  mobileSize,
  laptopSize,
  viewBox,
}) => {
  const matches = useMediaQuery("(max-width: 1023px)");

  const [size, setSize] = useState<ISize>(matches ? mobileSize : laptopSize);

  useLayoutEffect(() => {
    matches ? setSize(mobileSize) : setSize(laptopSize);
  }, [matches]);

  return (
    <svg
      width={`${size.width}`}
      height={`${size.height}`}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {path}
    </svg>
  );
};

export default ViewIcon;

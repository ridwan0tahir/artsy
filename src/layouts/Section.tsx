import { ReactNode } from "react";
import classNames from "classnames";

interface ISection {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className }: ISection) {
  return (
    <section className={classNames("pb-24", className)}>{children}</section>
  );
}

interface ISectionHeader {
  children?: ReactNode;
  label?: ReactNode;
  className?: string;
}
Section.Header = function SectionHeader({
  children,
  label,
  className,
}: ISectionHeader) {
  return (
    <>
      {label ? (
        <h2 className="font-satoshi font-bold text-fs-60 leading-lh-70 mb-8">
          {label}
        </h2>
      ) : (
        <div className={className}>{children}</div>
      )}
    </>
  );
};

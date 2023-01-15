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
  content?: ReactNode;
  label?: ReactNode;
}
Section.Header = function SectionHeader({ content, label }: ISectionHeader) {
  return (
    <>
      {label ? (
        <h2 className="font-satoshi font-bold text-fs-60 leading-lh-70 mb-8">
          {label}
        </h2>
      ) : (
        <>{content}</>
      )}
    </>
  );
};

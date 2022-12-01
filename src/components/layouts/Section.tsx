import { FunctionComponent, ReactNode } from "react";

interface ISection {
  label?: string;
  className?: string;
  content: ReactNode;
}

const Section: FunctionComponent<ISection> = ({
  label,
  className,
  content,
}) => {
  return (
    <section className={className}>
      {label && (
        <h2 className="font-satoshi font-bold text-fs-60 leading-lh-70">
          {label}
        </h2>
      )}
      {content}
    </section>
  );
};

export default Section;

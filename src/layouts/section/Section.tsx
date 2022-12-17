import classNames from "classnames";
import { FunctionComponent, ReactNode } from "react";

interface ISection {
  className?: string;
  content: ReactNode;
}

const Section: FunctionComponent<ISection> = ({ className, content }) => {
  return (
    <section className={classNames("pb-24", className)}>{content}</section>
  );
};

export default Section;

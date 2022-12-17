import { FunctionComponent, ReactNode } from "react";

interface ISectionHeader {
  label?: string;
  content?: ReactNode;
}

const SectionHeader: FunctionComponent<ISectionHeader> = ({
  label,
  content,
}) => {
  return (
    <>
      {content ? (
        { content }
      ) : (
        <h2 className="font-satoshi font-bold text-fs-60 leading-lh-70 mb-8">
          {label}
        </h2>
      )}
    </>
  );
};

export default SectionHeader;

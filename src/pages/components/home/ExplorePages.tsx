import LinkButton from "components/common/LinkButton";
import Arrow from "components/icons/Arrow";
import { ReactNode } from "react";

interface IExplorePagesContent {
  content: ReactNode;
  href: string;
}

export const ExplorePagesContent = ({
  content,
  href,
}: IExplorePagesContent) => (
  <p
    className="px-[5%] text-fs-50 leading-lh-50 flex items-center py-3 lg:py-7
    border-y border-black-03 lg:text-fs-90 last:border-t-0 lg:px-[10%]"
  >
    {content}
    <LinkButton
      href={href}
      className="w-[3.1325rem] h-[3.1325rem] rounded-full border border-black-03 ml-auto
      flex items-center justify-center hover:bg-white-01/10 ease-linear duration-500
      lg:w-[4.875rem] lg:h-[4.875rem]"
      content={<Arrow color="#616161" className="overflow-hidden" />}
    />
  </p>
);

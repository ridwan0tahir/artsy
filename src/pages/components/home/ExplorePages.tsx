import { ReactNode } from 'react';

import Button from '@components/common/Button';
import Arrow from '@components/icons/Arrow';
import Section from '@layouts/Section';

export default function ExplorePages() {
  return (
    <Section className="pt-24 -mx-3 lg:-mx-[120px]">
      <ExplorePagesList />
    </Section>
  );
}

const ExplorePagesList = () => {
  const configs = [
    { content: 'Explore marketplace', href: '/marketplace' },
    { content: 'See auctions', href: '/auction' },
  ];
  return (
    <>
      {configs.map((config) => (
        <ExplorePagesItem key={config.href} {...config} />
      ))}
    </>
  );
};

interface IExplorePagesItem {
  content: ReactNode;
  href: string;
}
const ExplorePagesItem = ({ content, href }: IExplorePagesItem) => (
  <p
    className="px-[5%] text-[1.5rem] leading-[2.025rem] flex items-center py-3 lg:py-7
    border-y border-black-03 lg:text-[3rem] lg:leading-[4.05rem] last:border-t-0 lg:px-[120px]"
  >
    {content}
    <Button
      as="link"
      to={href}
      className="w-[3.1325rem] h-[3.1325rem] rounded-full border border-black-03 ml-auto
      flex items-center justify-center hover:bg-white-01/10 ease-linear duration-500
      lg:w-[4.875rem] lg:h-[4.875rem]"
    >
      <Arrow color="#616161" className="overflow-hidden" />
    </Button>
  </p>
);

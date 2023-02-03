import Button from 'components/common/Button';
import Arrow from 'components/icons/Arrow';
import Section from 'layouts/Section';
import { ReactNode } from 'react';

export default function ExplorePages() {
  return (
    <Section className="pt-24">
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
    className="px-[5%] text-fs-50 leading-lh-50 flex items-center py-3 lg:py-7
    border-y border-black-03 lg:text-fs-90 last:border-t-0 lg:px-[10%]"
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

import Button from '@components/common/Button';
import Section from '@layouts/Section';
import { FunctionComponent } from 'react';
import { IUpcomingDropProduct } from '@utils/constants/product';
import UpcomingDropData from '@data/upcomingDropData';
import classNames from 'classnames';
import { BiChevronDown } from 'react-icons/bi';

export default function UpcomingDrop() {
  return (
    <Section>
      <Intro />
      <SortButton />
      <UpcomingDropList upcomingDrops={UpcomingDropData} />
    </Section>
  );
}

const Intro = () => (
  <article className="flex flex-col space-y-5 max-w-[290px] mx-auto mb-9">
    <h1 className="text-center text-[1.875rem] font-[700] leading-[3.21875rem]">
      Upcoming drops
    </h1>
    <p className="text-center text-[1.125rem] font-[400] leading-[1.76625rem]">
      You may turn on notifications so that no drop will miss you.
    </p>
    <Button
      className="text-[1.40375rem] leading-[2.495rem] px-[80px] py-2
      border border-black-01 rounded-lg hover:bg-[hsla(0,0%,100%,0.5)]"
    >
      Notify me
    </Button>
  </article>
);

const SortButton = () => {
  return (
    <Button className="ml-auto mb-14 flex items-center gap-x-4">
      Filter by
      <BiChevronDown />
    </Button>
  );
};

interface IUpcomingDropList {
  upcomingDrops: IUpcomingDropProduct[];
}
const UpcomingDropList: FunctionComponent<IUpcomingDropList> = ({
  upcomingDrops,
}) => (
  <ul className="grid gap-[50px]">
    {upcomingDrops.map((prod) => (
      <li key={prod.id}>
        <UpcomingDropCard {...prod} />
      </li>
    ))}
  </ul>
);

interface IUpcomingDropCard {
  id: string;
  name: string;
  cover: string;
  description: string;
  creator: string;
  status: string;
}

const UpcomingDropCard: FunctionComponent<IUpcomingDropCard> = ({
  id,
  name,
  cover,
  description,
  creator,
  status,
}) => {
  const DataObj = {
    ended: {
      title: 'Auction ended',
      action: 'View auction',
      time: '2 hours ago',
    },
    live: {
      title: 'Auction started',
      action: 'Join now',
      time: '00h : 00m : 00s',
    },
    upcoming: {
      title: 'Time remaining',
      action: 'Get notified',
      time: '06h : 45m : 22s',
    },
  };

  return (
    <div className="flex flex-col gap-y-8">
      <figure className="relative h-[235px] rounded-[12px] overflow-hidden">
        <img src={cover} alt={name} className="w-full h-full object-cover" />
        <figcaption
          className="absolute top-0 left-0 w-full h-full text-white-01
          p-4 flex flex-col justify-between"
        >
          <span
            className={classNames(
              'self-end px-5 py-1 rounded-[10px] text-[0.75rem] leading-[0.9075rem] uppercase',
              {
                ['bg-[hsla(212,6%,62%,1)]']: status === 'ended',
                ['bg-[hsla(119,46%,43%,1)]']: status === 'upcoming',
                ['bg-[hsla(212,82%,60%,1)]']: status === 'live',
              }
            )}
          >
            {status}
          </span>
          <div
            className="flex flex-col gap-y-2 px-7 py-2 bg-white-01/20
            border border-white-01 rounded-lg backdrop-blur-[1px] text-[1rem]
            leading-[1.755rem] font-[400]"
          >
            {DataObj[status as keyof typeof DataObj].title}
            <span className="text-[1.375rem] leading-[1.87rem] font-stix font-[400]">
              {DataObj[status as keyof typeof DataObj].time}
            </span>
          </div>
        </figcaption>
      </figure>

      <div className="flex flex-col space-y-4">
        <p className="text-[1rem] leading-[1.35rem] font-[400]">
          November 21 at 11 am WAT
        </p>
        <h3 className="text-[1.5rem] leading-[2.025rem]">{name}</h3>
        <p className="text-[0.9375rem] leading-[1.471975rem] text-[hsla(0,0%,38%,1)]">
          {description}.
        </p>
        <p className="text-[1.25rem] leading-[1.9625rem]">
          Creator :&nbsp;&nbsp;&nbsp;
          <span className="text-[hsla(200,100%,32%,1)]">{creator}</span>
        </p>
        <Button
          className="w-max text-[1rem] leading-[1.57rem] text-[hsla(200,100%,32%,1)]
          border-b border-[hsla(200,100%,32%,1)]"
        >
          {DataObj[status as keyof typeof DataObj].action}
        </Button>
      </div>
    </div>
  );
};

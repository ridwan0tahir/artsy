import { FunctionComponent } from 'react';

import Section from '@layouts/Section';
import Button from '@components/common/Button';
import TopBidData from '@data/topBidData';
import { ITopBidProduct } from '@utils/constants/product';

export default function TopBid() {
  return (
    <Section>
      <h2 className="text-[1.25rem] leading-[1.6875rem] mb-7">
        Top bids from popular creators
      </h2>

      <TopBidList topBidProducts={TopBidData} />
    </Section>
  );
}

interface ITopBidList {
  topBidProducts: ITopBidProduct[];
}
const TopBidList: FunctionComponent<ITopBidList> = ({ topBidProducts }) => {
  return (
    <ul className="grid gap-20">
      {topBidProducts.map((prod) => (
        <li key={prod.id} className="">
          <TopBidCard {...prod} />
        </li>
      ))}
    </ul>
  );
};

interface ITopBidCard {
  id: string;
  name: string;
  cover: string;
  creator: string;
  date: string;
  highestBid: number;
  price: number;
}
const TopBidCard: FunctionComponent<ITopBidCard> = ({
  id,
  name,
  cover,
  highestBid,
  creator,
  price,
}) => {
  return (
    <>
      <figure
        className="shadow-[0px_0px_9px_-1px_hsla(0,0%,0%,0.25)]
        p-[20px_20px_8px_20px] rounded-2xl"
      >
        <img
          src={cover}
          alt={name}
          className="mb-2 rounded-lg w-full h-[200px] object-cover"
        />
        <figcaption className="flex items-center justify-between">
          <p className="text-[1.25rem] font-[700]">{name}</p>
          <p className="text-[1.25rem] font-[700]">{`${price.toFixed(
            2
          )} ETH`}</p>
        </figcaption>
      </figure>
      <div
        className="p-5 flex flex-col space-y-7 text-[1.25rem] 
        leading-[1.6875rem] text-[#1E1E1E]"
      >
        <p className="flex items-center gap-x-[27px]">
          Creator&nbsp;:
          <span className="font-[700] text-[hsla(200,100%,32%,1)]">
            {creator}
          </span>
        </p>
        <p className="flex items-center gap-x-[54px]">
          Date&nbsp;:<span className="font-[700]">12/08/22</span>
        </p>
      </div>
      <div
        className="p-5 grid grid-cols-2 grid-rows-2 gap-y-4 
        bg-[hsla(0,11%,96%,1)] rounded-[10px]"
      >
        <p
          className="col-start-1 col-end-2 row-start-1 row-end-2 
          text-[1.125rem] text-[hsla(0,0%,38%,1)]"
        >
          Current bid
        </p>
        <p
          className="col-start-1 col-end-2 row-start-2 row-end-3
          text-[1.25rem] leading-[1.6875rem]"
        >{`${highestBid.toFixed(2)} ETH`}</p>
        <Button
          className="col-start-2 col-end-3 row-start-1 row-end-3 self-center
          justify-self-end h-max w-max px-[44px] py-[12px] rounded-[2.34px]
        bg-[hsla(234,58%,48%,1)] text-white-01"
        >
          Place bid
        </Button>
      </div>
    </>
  );
};

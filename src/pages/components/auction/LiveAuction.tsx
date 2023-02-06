import { FunctionComponent } from 'react';

import Section from '@layouts/Section';
import LiveAuctionData from '@data/liveAuction';
import { ILiveAuctionProduct } from '@utils/constants/product';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Navigation, Pagination } from 'swiper';
import Button from '@components/common/Button';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useMediaQuery } from 'usehooks-ts';
// import 'swiper/css';
// import 'swiper/css/pagination';

interface ILiveAuction {}

export default function LiveAuction({}: ILiveAuction) {
  return (
    <Section>
      <h2
        className="text-[1.25rem] leading-[1.6875rem] mb-7 lg:text-[1.75rem]
        lg:leading-[2.3625rem]"
      >
        Here's an overview of products actively on auction, explore!
      </h2>
      <LiveAuctionProductList auctionProducts={LiveAuctionData} />
    </Section>
  );
}

interface ILiveAuctionProductList {
  auctionProducts: ILiveAuctionProduct[];
}
const LiveAuctionProductList: FunctionComponent<ILiveAuctionProductList> = ({
  auctionProducts,
}) => {
  const matches = useMediaQuery('(max-width:1024px)');

  return (
    <Swiper
      slidesPerView={matches ? 1 : 'auto'}
      spaceBetween={matches ? 30 : 43}
      navigation={
        matches
          ? {
              prevEl: '#live_prev',
              nextEl: '#live_next',
            }
          : false
      }
      pagination={{
        el: '#live_pagination',
        clickable: true,
        renderBullet: (_, className) => {
          return '<span class="' + className + '"></span>';
        },
      }}
      freeMode={!matches}
      grabCursor={true}
      modules={[FreeMode, Navigation, Pagination]}
      className="relative"
    >
      {auctionProducts.map((prod) => (
        <SwiperSlide
          key={prod.id}
          className="min-h-[230px] h-[32vh] lg:w-[30rem] lg:h-[20rem]"
        >
          <LiveAuctionProductCard name={prod.name} cover={prod.cover} />
        </SwiperSlide>
      ))}
      <div
        className="absolute z-[1000] top-[calc(50%-20px)] left-0 w-full px-3
        -translate-y-[calc(50%-10px)] flex items-center justify-between"
      >
        <Button
          id="live_prev"
          className="p-3 rounded-full bg-[hsla(0,0%,100%,0.2)] backdrop-blur-sm
          drop-shadow-[4.68px_4.68px_7.02px_0px_hsla(0,0%,0%,0.15)]"
        >
          <BiChevronLeft size={20} color="#FFF" />
        </Button>
        <Button
          id="live_next"
          className="p-3 bg-[hsla(0,0%,100%,0.2)] backdrop-blur-sm
          drop-shadow-[4.68px_4.68px_7.02px_0px_hsla(0,0%,0%,0.15)] rounded-full"
        >
          <BiChevronRight size={20} color="#FFF" />
        </Button>
      </div>
      <div
        id="live_pagination"
        className="flex items-center justify-center mt-5 lg:mt-14"
      ></div>
    </Swiper>
  );
};

interface ILiveAuctionProductCard {
  name: string;
  cover: string;
}

const LiveAuctionProductCard: FunctionComponent<ILiveAuctionProductCard> = ({
  name,
  cover,
}) => {
  return (
    <figure
      className="relative h-full  w-full
      rounded-[16px] overflow-hidden"
    >
      <img src={cover} alt={name} className="w-full h-full object-cover" />
      <figcaption
        className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2
        px-7 py-2 w-max bg-white-01/40 backdrop-blur-sm rounded-lg
        font-stix font-[400] text-[1.25rem] leading-[1.5625rem] border
        border-white-01 text-white-01 lg:text-[2.5rem] lg:leading-[4rem]"
      >
        6hr: 40mins: 15s
      </figcaption>
    </figure>
  );
};

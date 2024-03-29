import { FunctionComponent } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import Button from '@components/common/Button';
import Section from '@layouts/Section';
import { UpcomingAuctionImages } from '@data/displayImages';
import LongArrow from '@components/icons/LongArrow';

export default function UpcomingAuction() {
  return (
    <Section
      className="upcomingGradient !py-[5%] px-[5%] lg:px-[10%] lg:!py-0 
      relative text-white-01 -mx-3 lg:-mx-[120px]"
    >
      <UpcomingAuctionHeader />
      <UpcomingAuctionDisplay images={UpcomingAuctionImages} />
      <UpcomingAuctionFooter />
    </Section>
  );
}

const UpcomingAuctionHeader = () => (
  <Button
    as="link"
    to="#"
    className="hidden capitalize text-[2.5rem] leading-[3.375rem] py-6 lg:block"
  >
    <>
      See Upcoming Auctions and Exhibitions
      <LongArrow className="mt-2" />
    </>
  </Button>
);

const UpcomingAuctionFooter = () => (
  <div className="py-[23.16px] hidden lg:flex items-center space-x-5">
    <Button
      as="button"
      id="upcomingBtnPrev"
      className="w-[4.357rem] h-[4.357rem] shadow-[7.77px_7.77px_11.66px_0px_hsla(0,0%,0%,0.15)] 
      rounded-full ml-auto flex items-center justify-center bg-[hsla(25,91%,39%,0.19)]"
    >
      <HiOutlineChevronLeft />
    </Button>
    <Button
      as="button"
      id="upcomingBtnNext"
      className="w-[4.357rem] h-[4.357rem] shadow-[7.77px_7.77px_11.66px_0px_hsla(0,0%,0%,0.15)] 
      rounded-full ml-auto flex items-center justify-center bg-[hsla(25,91%,39%,0.19)]"
    >
      <HiOutlineChevronRight />
    </Button>
  </div>
);

interface IUpcomingAuctionDisplay {
  images: string[];
}

const UpcomingAuctionDisplay: FunctionComponent<IUpcomingAuctionDisplay> = ({
  images,
}) => {
  const configs = {
    allowTouchMove: false,
    speed: 3000,
    modules: [EffectFade, Autoplay, Navigation, Pagination],
    rewind: true,
    navigation: {
      nextEl: '#upcomingBtnNext',
      prevEl: '#upcomingBtnPrev',
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
  };

  return (
    <Swiper {...configs} effect="fade">
      {images.map((image) => (
        <SwiperSlide key={image}>
          <UpcomingAuctionImage cover={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

interface IUpcomingAuctionImage {
  cover: string;
}

const UpcomingAuctionImage = ({ cover }: IUpcomingAuctionImage) => (
  <figure className="w-full h-[16.8125rem] lg:h-[568px]">
    <img
      className="w-full h-full object-cover"
      src={cover}
      alt="Auction Images"
      loading="lazy"
    />

    <figcaption
      className="absolute bottom-0 left-0 grid auto-cols-auto py-6 w-full h-full
        auto-grid-auto justify-items-center space-x-4 z-[30] px-2 lg:grid-rows-1 
        lg:h-auto lg:px-8 lg:py-12 lg:space-x-4"
    >
      <h4
        className="col-start-1 col-end-2 font-bellefair text-[2.5rem] font-[400] 
          leading-[2.865rem] self-center lg:text-[4.829rem] lg:leading-[4.8425rem]"
      >
        01
      </h4>
      <article
        className="col-start-2 col-end-3 flex flex-col space-y-4 lg:max-w-[628.85px]
        uppercase max-w-[280px]"
      >
        <h3
          className="font-bellefair text-[1.25rem] font-[400] leading-[1.4325rem] 
          lg:text-[1.833125rem] lg:leading-[2.09375rem]"
        >
          MONALISA REDEFINED IN STYLE.
        </h3>
        <p
          className="font-poppins text-[0.75rem] leading-[1.125rem] lg:text-[0.84125rem]
          lg:leading-[1.261875rem]"
        >
          Start on : 08:00 GTS . Monday{' '}
        </p>
        <p
          className="text-[0.625rem] leading-[0.84375rem] lg:text-[1rem]
          lg:leading-[1.338125rem]"
        >
          GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS
          AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST
          BIDS.
        </p>
      </article>
      <div
        className="col-start-2 col-end-3 flex items-center font-[400] justify-self-end 
          space-x-7 lg:col-start-3 lg:col-end-4 lg:self-end lg:space-x-7 mt-3 text-[0.875rem]
          leading-[1.18125rem] lg:text-[1.5rem] lg:leading-[2.025rem]"
      >
        <Button className="border-b-2 border-white" to="#">
          See more
        </Button>
        <Button className="p-2 border border-white rounded-lg lg:p-4" to="#">
          Set a reminder
        </Button>
      </div>
    </figcaption>
    <div className="imageGradient absolute left-0 top-0 w-full h-full z-20"></div>
  </figure>
);

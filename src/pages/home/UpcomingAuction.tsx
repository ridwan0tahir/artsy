import ButtonIcon from "components/common/ButtonIcon";
import LinkButton from "components/common/LinkButton";
import Chevron from "components/icons/Chevron";
import LongArrow from "components/icons/LongArrow";

export const UpcomingAuctionHeader = () => (
  <LinkButton
    href="#"
    className="hidden capitalize text-fs-80 py-6 lg:block"
    content={
      <>
        See Upcoming Auctions and Exhibitions
        <LongArrow />
      </>
    }
  />
);

export const UpcomingAuctionFooter = () => (
  <div className="py-5 hidden lg:flex items-center space-x-5">
    <ButtonIcon
      id="upcomingBtnPrev"
      className="w-[4.357rem] h-[4.357rem] shadow-[7.77px_7.77px_11.66px_0px_hsla(0,0%,0%,0.15)] 
      rounded-full ml-auto flex items-center justify-center bg-[hsla(25,91%,39%,0.19)]"
      content={<Chevron />}
    />
    <ButtonIcon
      id="upcomingBtnNext"
      className="w-[4.357rem] h-[4.357rem] shadow-[7.77px_7.77px_11.66px_0px_hsla(0,0%,0%,0.15)] 
      rounded-full ml-auto flex items-center justify-center bg-[hsla(25,91%,39%,0.19)]"
      content={<Chevron />}
    />
  </div>
);

interface IUpcomingAuctionDisplay {
  cover: string;
}

export const UpcomingAuctionDisplay = ({ cover }: IUpcomingAuctionDisplay) => {
  return (
    <figure className="w-full h-full">
      <img className="w-full h-full object-cover" src={cover} alt="" />

      <figcaption
        className="absolute bottom-0 left-0 grid auto-cols-auto py-8 w-full h-full
        auto-grid-auto justify-items-center space-x-4 z-[30] px-2 lg:grid-rows-1 
        lg:h-auto lg:px-8 lg:py-12 "
      >
        <h4
          className="col-start-1 col-end-2 font-bellefair text-fs-80 font-normal 
          self-center lg:text-[4.829rem]"
        >
          01
        </h4>
        <article
          className="col-start-2 col-end-3 flex flex-col space-y-4 max-w-[628.85px]
          uppercase"
        >
          <h3 className="font-bellefair text-fs-40 font-normal lg:text-fs-60">
            MONALISA REDEFINED IN STYLE.
          </h3>
          <p className="font-poppins text-fs-10 lg:text-fs-20">
            Start on : 08:00 GTS . Monday{" "}
          </p>
          <p className="text-fs-20 lg:text-fs-30">
            GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS
            AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST
            BIDS.
          </p>
        </article>
        <div
          className="col-start-2 col-end-3 flex items-center font-normal justify-self-end 
          space-x-7 lg:col-start-3 lg:col-end-4 lg:self-end lg:space-x-7 mt-3 text-fs-20 
          lg:text-fs-50"
        >
          <LinkButton
            className="border-b-2 border-white "
            href="#"
            content={"See more"}
          />
          <LinkButton
            className="p-2 border border-white rounded-lg"
            href="#"
            content={"Set a reminder"}
          />
        </div>
      </figcaption>
      <div className="imageGradient absolute left-0 top-0 w-full h-full z-20"></div>
    </figure>
  );
};

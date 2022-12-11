import { useState } from "react";
import SwiperCore from "swiper";
import SwiperWrapper from "components/common/SwiperWrapper";

export const HeroIntro = () => (
  <article className="text-center flex flex-col space-y-7 w-[90%] mx-auto lg:space-y-12">
    <h1
      className="font-clash text-[2rem] text-black-03 lg:text-[5rem]
      lg:max-w-[66.75rem] mx-auto "
    >
      Photography is poetry and beautiful untold stories
    </h1>
    <p className="text-fs-30 lg:text-[1.75rem] lg:max-w-[57.875rem] mx-auto">
      Flip through more than 10,000 vintage shots, old photograghs, historic
      images and captures seamlessly in one place. Register to get top access.
    </p>
  </article>
);

interface IHeroMobileDisplay {
  images: string[];
}

export const HeroMobileDisplay = ({ images }: IHeroMobileDisplay) => (
  <ul className="relative h-[18.875rem] group w-[90%] mx-auto">
    {images.map((image, index) => (
      <li
        key={image}
        className="w-[85%] min-w-[85%] mx-auto h-[18.875rem] absolute top-0 left-1/2
        -translate-x-1/2 origin-left [transition:rotate_.5s_ease-in]"
        style={{
          rotate: index === 0 ? "0deg" : index === 1 ? "9.31deg" : "-9.31deg",
          zIndex: index === 0 ? 3 : index === 1 ? 2 : 1,
        }}
      >
        <img
          className="w-full h-full object-cover object-center"
          src={image}
          alt="Hero Image"
        />
      </li>
    ))}
  </ul>
);

interface IHeroDesktopDisplay {
  images: string[];
}

export const HeroDesktopDisplay = ({ images }: IHeroDesktopDisplay) => {
  const [swipers, setSwipers] = useState<SwiperCore[]>([]);

  const handleSetSwipers = (swiper: SwiperCore) => {
    if (swipers.indexOf(swiper) !== -1) return;
    setSwipers((current) => [...current, swiper]);
  };

  return (
    <div className="flex gap-10">
      <SwiperWrapper
        images={images}
        speed={1000}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        initialSlide={0}
        onSlideChange={() =>
          swipers
            .filter((swiper) => !swiper.destroyed)
            .forEach((swiper) => swiper.slideNext(1000))
        }
      />

      <SwiperWrapper
        images={images}
        initialSlide={1}
        onSwiper={handleSetSwipers}
      />

      <SwiperWrapper
        images={images}
        initialSlide={2}
        onSwiper={handleSetSwipers}
      />
    </div>
  );
};

import SwiperCore, { Autoplay, Navigation } from "swiper";

const HeroDisplayConfigs = (
  swipers: SwiperCore[],
  handleSetSwipers: (swiper: SwiperCore) => void
) => {
  const mainConfig = {
    modules: [Autoplay, Navigation],
    allowTouchMove: false,
    rewind: true,
    spaceBetween: 20,
  };

  const translates = [
    "translate-y-8",
    "translate-y-4",
    "translate-y-2",
    "translate-y-8",
    "translate-y-4",
  ];

  const configs = [
    {
      ...mainConfig,
      speed: 1000,
      autoplay: { delay: 1000, disableOnInteraction: false },
      onSlideChange: () =>
        swipers
          .filter((swiper) => !swiper.destroyed)
          .forEach((swiper) => swiper.slideNext(1000)),
      className: ["w-[358px] h-[328px]", translates[0]].join(" "),
    },
    ...Array.from({ length: 4 }, function (_, index) {
      return {
        ...mainConfig,
        onSwiper: handleSetSwipers,
        className: ["w-[358px] h-[328px]", translates[index + 1]].join(" "),
      };
    }),
  ];

  return configs;
};

export default HeroDisplayConfigs;

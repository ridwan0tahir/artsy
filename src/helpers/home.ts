import { SwiperModule } from "swiper/types";

interface IMainConfig {
  modules: SwiperModule[];
  allowTouchMove: boolean;
  rewind: boolean;
  spaceBetween: number;
}

interface IOtherConfig {
  speed: number;
  autoplay: { delay: number; disableOnInteraction: boolean };
  onSlideChange: () => void;
}

export const getHeroConfig = (
  mainConfig: IMainConfig,
  otherConfig: IOtherConfig,
  classNames: string[]
) => {
  const firstConfig = {
    ...mainConfig,
    ...otherConfig,
  };

  const configs = [firstConfig, ...Array(4).fill(mainConfig)].map(
    (config, index) => {
      return {
        ...config,
        className: classNames[index],
      };
    }
  );

  return configs;
};

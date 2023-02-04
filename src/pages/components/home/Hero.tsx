import { useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroDisplayConfigs from 'configs/HeroDisplayConfigs';
import Section from 'layouts/Section';
import { useMediaQuery } from 'usehooks-ts';
import { HeroDesktopImages, HeroMobileImages } from 'data/displayImages';

export default function Hero() {
  const matches = useMediaQuery('(min-width:1024px)');

  return (
    <Section className="flex flex-col space-y-20">
      <HeroText />
      {matches ? (
        <HeroDesktopBanner images={HeroDesktopImages} />
      ) : (
        <HeroMobileBanner images={HeroMobileImages} />
      )}
    </Section>
  );
}

/**
 * Component to display intro text
 */
const HeroText = () => (
  <article
    className="text-center flex flex-col items-center space-y-[30px] 
    w-full lg:space-y-12"
  >
    <h1
      className="font-clash text-[2rem] leading-[3rem] text-black-03 
      lg:text-[5rem] lg:max-w-[66.75rem]"
    >
      Photography is poetry and beautiful untold stories
    </h1>
    <p
      className="text-[1rem] leading-[1.566875rem] 
      lg:text-[1.75rem] lg:max-w-[57.875rem]"
    >
      Flip through more than 10,000 vintage shots, old photograghs, historic
      images and captures seamlessly in one place. Register to get top access.
    </p>
  </article>
);

/**
 * Component to display the animation of the images on mobile phones
 */
interface IHeroMobileBanner {
  images: string[];
}
const HeroMobileBanner = ({ images }: IHeroMobileBanner) => (
  <ul className="relative h-[18.875rem] group w-[90%] mx-auto">
    {images.map((image, index) => (
      <li
        key={image}
        className="w-[85%] min-w-[85%] mx-auto h-[18.875rem] absolute top-0 left-1/2
        -translate-x-1/2 origin-left [transition:rotate_.5s_ease-in]"
        style={{
          rotate: index === 0 ? '0deg' : index === 1 ? '9.31deg' : '-9.31deg',
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

/**
 * Component to display the animation of the images on desktops
 */
interface IHeroDesktopBanner {
  images: string[];
}
const HeroDesktopBanner = ({ images }: IHeroDesktopBanner) => {
  const [swipers, setSwipers] = useState<SwiperCore[]>([]);

  const handleSetSwipers = (swiper: SwiperCore) => {
    if (swipers.indexOf(swiper) !== -1) return;
    setSwipers((current) => [...current, swiper]);
  };

  const configs = HeroDisplayConfigs(swipers, handleSetSwipers);

  return (
    <div className="flex justify-between space-x-5 h-full max-w-[1870px]">
      {configs.map((config, index) => (
        <Swiper {...config} initialSlide={index} key={'swiper' + index}>
          {images.map((image, index) => (
            <SwiperSlide key={image} className="flex items-center">
              <img
                src={image}
                alt="Display Image"
                style={{
                  width: '100%',
                  height: index === 4 ? '70%' : '100%',
                  objectFit: 'cover',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ))}
    </div>
  );
};

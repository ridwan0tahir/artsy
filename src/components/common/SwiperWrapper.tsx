import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

interface ISwiperWrapper {
  onSlideChange?: (swiper: SwiperCore) => void;
  onSwiper?: (swiper: SwiperCore) => void;
  initialSlide?: number;
  speed?: number;
  autoplay?: {
    delay: number;
    disableOnInteraction: boolean;
  };
  images: string[];
}

const SwiperWrapper = ({
  onSwiper,
  onSlideChange,
  initialSlide,
  speed,
  autoplay,
  images,
}: ISwiperWrapper) => {
  const config = {
    onSwiper,
    onSlideChange,
    initialSlide,
    speed,
    autoplay,
    modules: [Autoplay, Navigation],
    allowTouchMove: false,
    rewind: true,
    spaceBetween: 30,
    className: "w-[358px]",
  };

  return (
    <Swiper {...config}>
      {images.map((image) => (
        <SwiperSlide key={image}>
          <div className="h-[428px]">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="Display Image"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperWrapper;

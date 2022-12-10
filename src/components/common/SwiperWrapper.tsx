import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import Products from "providers/ProductProvider";

interface ISwiperWrapper {
  onSlideChange?: (swiper: SwiperCore) => void;
  onSwiper?: (swiper: SwiperCore) => void;
  initialSlide?: number;
  speed?: number;
  autoplay?: {
    delay: number;
    disableOnInteraction: boolean;
  };
  products: typeof Products;
}

const SwiperWrapper = (props: ISwiperWrapper) => {
  return (
    <Swiper
      {...props}
      modules={[Autoplay, Navigation]}
      allowTouchMove={false}
      rewind={true}
      spaceBetween={30}
      className="w-[358px]"
    >
      {props.products.map((product, index) => (
        <SwiperSlide key={index}>
          <div className="h-[428px]">
            <img
              className="w-full h-full object-cover"
              src={product.cover}
              alt={product.name}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperWrapper;

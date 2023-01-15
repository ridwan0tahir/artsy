import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { useMediaQuery } from "usehooks-ts";
import Section from "layouts/Section";

import CollectionCard from "components/pages/products/CollectionCard";

export default function ProductCollection() {
  const matches = useMediaQuery("(min-width: 1024px)");

  return (
    <Section>
      <Swiper
        navigation={{
          nextEl: "",
          prevEl: "",
          disabledClass: "",
        }}
        slidesPerView={matches ? 3 : 1}
        spaceBetween={30}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <CollectionCard />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionCard />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionCard />
        </SwiperSlide>
      </Swiper>
    </Section>
  );
}

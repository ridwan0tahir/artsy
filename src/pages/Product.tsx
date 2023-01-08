import classNames from "classnames";
import Section from "layouts/Section";
import CollectionCard from "components/pages/products/CollectionCard";
import { useState, FunctionComponent } from "react";
import { useLocation, useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Button from "components/common/Button";
import Chevron from "components/icons/Chevron";
import FavThin from "components/icons/FavThin";
import Next from "components/icons/Next";
import { useMediaQuery } from "usehooks-ts";

const Product: FunctionComponent = () => {
  const param = useLocation();

  console.log(param.pathname);

  const [activeItem, setActiveItem] = useState(0);

  const transitionClass = (active: boolean) =>
    classNames("[transition:transform_.5s_ease-in-out]", {
      ["h-auto visible scale-y-100 origin-top"]: active,
      ["h-0 invisible scale-y-0"]: !active,
    });

  const firstItem = (active: boolean) => (
    <div className={transitionClass(active)}>
      <p className="capitalize text-black-01 mb-4">
        Creator&nbsp;:&nbsp;
        <span className="!text-blue-03">Ali Dawa</span>
      </p>
      <p className="text-black-04 mb-4">Made in Italy</p>
      <p className="text-black-04 mb-5">Total views: 1.7k</p>

      <form action="">
        <div className="flex items-center gap-6 text-fs-60 mb-5">
          <button>+</button>
          <span>1</span>
          <button>-</button>
        </div>

        <div className="flex items-center gap-5 flex-wrap">
          <button type="button" className="btn-primary">
            Add to cart
          </button>
          <Button className="p-4 border border-black-06 rounded-md">
            <FavThin />
          </Button>
        </div>
      </form>
    </div>
  );

  const secondItem = (active: boolean) => (
    <p className={transitionClass(active)}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque fugiat
      nobis accusantium fuga, labore sunt eveniet soluta consectetur nemo quia
      beatae. Ab deleniti eos, quae aperiam quaerat obcaecati veniam impedit?
    </p>
  );

  const thirdItem = (active: boolean) => (
    <p className={transitionClass(active)}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque fugiat
      nobis accusantium fuga, labore sunt eveniet soluta consectetur nemo quia
      beatae. Ab deleniti eos, quae aperiam quaerat obcaecati veniam impedit?
    </p>
  );

  const fourthItem = (active: boolean) => (
    <p className={transitionClass(active)}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque fugiat
      nobis accusantium fuga, labore sunt eveniet soluta consectetur nemo quia
      beatae. Ab deleniti eos, quae aperiam quaerat obcaecati veniam impedit?
    </p>
  );

  const items = [
    { title: "details", content: firstItem },
    { title: "description", content: secondItem },
    { title: "listing", content: thirdItem },
    { title: "status", content: fourthItem },
  ];

  const matches = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="w-[90%] mx-auto text-black-03 text-fs-30 leading-lh-50">
      <Section className="lg:grid lg:grid-cols-[525px_1fr]">
        <div
          className="h-[50vh] min-h-[20rem] mb-4 lg:h-full lg:px-6 lg:py-11 lg:border
        lg:border-black-02"
        >
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/yheenca/image/upload/v1669896798/artsy/product/4764a7daa106cda4888b058654d2bf6f_b5w6au.jpg"
            alt="Image"
          />
        </div>
        <article className="lg:border lg:border-black-02 lg:border-l-0">
          <div
            className="flex items-center justify-between mb-3 uppercase lg:px-8 lg:py-12
            lg:border-b border-black-03"
          >
            <p>The Boolean Egyptian</p>
            <p>$22.89</p>
          </div>
          <ul className="grid auto-rows-auto">
            {items.map((item, index) => (
              <li
                key={item.title + index}
                className={classNames(
                  "border-b border-black-03 py-5 lg:px-8 lg:py-12 lg:last:border-b-0"
                )}
              >
                <div
                  className={classNames(
                    "flex items-center justify-between capitalize",
                    {
                      ["h-auto opacity-100 visible"]: !(activeItem === index),
                      ["h-0 opacity-0 invisible"]: activeItem === index,
                    }
                  )}
                  onClick={() => setActiveItem(index)}
                >
                  {item.title}
                  <Button>
                    <Chevron />
                  </Button>
                </div>
                {item.content(activeItem === index)}
              </li>
            ))}
          </ul>
        </article>
      </Section>

      <Section
      // label="More from this collection
      >
        <Swiper
          className="mySwiper"
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
    </div>
  );
};

export default Product;

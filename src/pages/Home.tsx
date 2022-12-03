import Section from "components/layouts/Section";
import FeaturedProductCard from "components/views/products/FeaturedProductCard";
import HeroImages from "providers/HeroImages";
import Products from "providers/ProductProvider";
import { useMemo } from "react";

const Home = () => {
  const products = useMemo(() => {
    return Products.filter((product) => product.featured);
  }, []);

  return (
    <div className="w-[90%] mx-auto">
      <Section
        content={
          <>
            <article className="text-center mb-14">
              <h1 className="font-clash text-[2rem] mb-7 text-black-03">
                Photography is poetry and beautiful untold stories
              </h1>
              <p className="text-fs-30">
                Flip through more than 10,000 vintage shots, old photograghs,
                historic images and captures seamlessly in one place. Register
                to get top access.
              </p>
            </article>
            <ul className="relative h-[20rem] bg-white-02">
              {HeroImages.map((image) => (
                <li
                  key={image.src}
                  className="w-[90%] mx-auto h-[18.875rem] absolute top-0 
                  left-1/2 -translate-x-1/2 origin-left"
                  style={{
                    rotate: `${image.rotate}deg`,
                    zIndex: `${image.index}`,
                  }}
                >
                  <img
                    className="w-full h-full object-cover object-center"
                    src={image.src}
                    alt="Hero Image"
                  />
                </li>
              ))}
            </ul>
          </>
        }
      />

      <Section
        label="Featured products"
        content={
          <ul className="flex flex-col gap-10">
            {products.map((product) => (
              <li key={product.id}>
                <FeaturedProductCard {...product} />
              </li>
            ))}
          </ul>
        }
      />
    </div>
  );
};

export default Home;

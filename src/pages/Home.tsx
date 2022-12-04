import Section from "components/layouts/Section";
import FeaturedProductCard from "components/views/products/FeaturedProductCard";
import HeroImages from "providers/HeroImages";
import Products from "providers/ProductProvider";
import { useMemo, useRef } from "react";
import { useHover } from "usehooks-ts";

const Home = () => {
  const products = useMemo(() => {
    return Products.filter((product) => product.featured);
  }, []);

  const imageListRef = useRef<HTMLUListElement>(null);
  const hover = useHover(imageListRef);

  return (
    <div className="w-[90%] mx-auto">
      <Section
        className="overflow-hidden"
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
            <ul
              ref={imageListRef}
              className="relative h-[18.875rem] group hover:flex hover:gap-4
              hover:overflow-x-auto hover:snap-mandatory hover:snap-x"
            >
              {/* ease-[cubic-bezier(0.05, 0.43, 0.25, 0.95)] duration-700 */}

              {HeroImages.map((image) => (
                <li
                  key={image.src}
                  className="w-[85%] min-w-[85%] mx-auto h-[18.875rem] absolute top-0 left-1/2
                  -translate-x-1/2 origin-left  group-hover:static group-hover:translate-x-0 
                  group-hover:snap-center [transition:rotate_.5s_ease-in,transform.3s] 
                  group-hover:[transition:rotate_.5s_ease-out]"
                  style={{
                    rotate: !hover ? `${image.rotate}deg` : "0deg",
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

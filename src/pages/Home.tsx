import Section from "components/layouts/Section";
import FeaturedProductCard from "components/views/products/FeaturedProductCard";
import Products from "providers/ProductProvider";
import { useMemo } from "react";

const Home = () => {
  const products = useMemo(() => {
    return Products.filter((product) => product.featured);
  }, []);

  return (
    <div className="w-[90%] mx-auto">
      <article className="text-center mb-8">
        <h1 className="font-clash text-[2rem] mb-7 text-black-03">
          Photography is poetry and beautiful untold stories
        </h1>
        <p className="text-fs-30">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </article>

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

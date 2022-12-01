import Section from "components/layouts/Section";
import FeaturedProductCard from "components/views/products/FeaturedProductCard";

const Home = () => {
  return (
    <div className="w-[90%] mx-auto">
      <article className="text-center">
        <h1 className="font-clash text-[2rem] mb-7 text-black-03">
          Photography is poetry and beautiful untold stories
        </h1>
        <p className="text-fs-30">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </article>

      <Section label="Featured products" content={<FeaturedProductCard />} />
    </div>
  );
};

export default Home;

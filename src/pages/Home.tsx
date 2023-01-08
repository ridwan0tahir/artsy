import { useContext } from "react";
import { ProductContext } from "providers/ProductProvider";
import Hero from "./components/home/Hero";
import Featured from "./components/home/Featured";
import UpcomingAuction from "./components/home/UpcomingAuction";
import ExplorePages from "./components/home/ExplorePages";
import TopCreators from "./components/home/TopCreators";

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      <Hero />

      <Featured products={products.slice(0, 3)} />

      <UpcomingAuction />

      <ExplorePages />

      <TopCreators />
    </>
  );
};

export default Home;

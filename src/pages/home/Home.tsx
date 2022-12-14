import { useContext, useMemo, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import {
  HeroMobileImages,
  HeroDesktopImages,
  UpcomingAuctionImages,
} from "data/DisplayImages";
import Section from "components/layouts/Section";
import FeaturedProductCard from "pages/home/FeaturedCard";
import { HeroIntro, HeroMobileDisplay, HeroDesktopDisplay } from "./Hero";
import {
  UpcomingAuctionDisplay,
  UpcomingAuctionFooter,
  UpcomingAuctionHeader,
} from "./UpcomingAuction";
import { ExplorePagesContent } from "./ExplorePages";
import { TopCreatorsArticle, TopCreatorsDisplay } from "./TopCreators";
import { ProductContext } from "providers/ProductProvider";

const Home = () => {
  const { products } = useContext(ProductContext);

  const featuredProduct = useMemo(() => {
    return products.slice(0, 3);
  }, []);

  const matches = useMediaQuery("(min-width:1024px)");

  return (
    <>
      <Section
        content={
          <div className="flex flex-col space-y-20">
            <HeroIntro />
            {matches ? (
              <HeroDesktopDisplay images={HeroDesktopImages} />
            ) : (
              <HeroMobileDisplay images={HeroMobileImages} />
            )}
          </div>
        }
      />

      <Section
        label="Featured products"
        className="w-[90%] lg:w-[80%] mx-auto"
        content={
          <ul role="list">
            {featuredProduct.map((product) => (
              <li
                key={product.id}
                className="py-8 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:grid-flow-dense 
                lg:gap-14 group/order lg:py-14 lg:border-t lg:border-black-01"
              >
                <FeaturedProductCard
                  id={product.id}
                  name={product.name}
                  cover={product.image_url}
                  description={product.description}
                  creators={product.creators}
                />
              </li>
            ))}
          </ul>
        }
      />

      <Section
        content={
          <div
            className="upcomingGradient py-[10%] px-[10%] lg:px-[10%] lg:py-0 
            relative text-white-01"
          >
            <UpcomingAuctionHeader />
            {<UpcomingAuctionDisplay images={UpcomingAuctionImages} />}
            <UpcomingAuctionFooter />
          </div>
        }
      />

      <Section
        content={[
          { content: "Explore marketplace", href: "/marketplace" },
          { content: "See auctions", href: "/auction" },
        ].map((nav) => (
          <ExplorePagesContent {...nav} key={nav.content} />
        ))}
      />

      <Section
        content={
          <div className="bg-black-07 relative">
            <TopCreatorsArticle />
            <TopCreatorsDisplay />
          </div>
        }
      />
    </>
  );
};

export default Home;

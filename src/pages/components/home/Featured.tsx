import { FunctionComponent } from "react";

import Arrow from "components/icons/Arrow";
import Button from "components/common/Button";
import { BsArrowRight } from "react-icons/bs";

import ProductData from "data/ProductData";
import Section from "layouts/Section";

interface IFeatured {
  products: typeof ProductData;
}
export default function Featured({ products }: IFeatured) {
  return (
    <Section className="w-[90%] lg:w-[80%] mx-auto">
      <Section.Header label="Featured products" />
      <FeaturedProductList products={products} />
    </Section>
  );
}

/**
 * List component of the featured products
 */
interface IFeaturedProductList {
  products: typeof ProductData;
}

const FeaturedProductList = ({ products }: IFeaturedProductList) => (
  <ul role="list">
    {products.map((product) => (
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
);

/**
 * Featured card component
 */
interface IFeaturedProductCard {
  id: string;
  name: string;
  cover: string;
  description: string;
  creators: { id: string; name: string; photo: string }[];
}

const FeaturedProductCard: FunctionComponent<IFeaturedProductCard> = ({
  id,
  name,
  cover,
  description,
  creators,
}) => {
  return (
    <>
      <figure className="relative h-[15.9875rem] mb-4 group lg:m-0 cursor-pointer">
        <img
          className="w-full h-full object-cover object-center"
          src={cover}
          alt={name}
        />
        <figcaption
          className="bg-black-05 absolute top-0 left-0 w-full h-full p-[5%]
          flex flex-col items-end justify-around invisible opacity-0 group-hover:opacity-100
          group-hover:visible ease-in-out duration-1000 lg:flex-row lg:justify-center lg:gap-10
          lg:items-center"
        >
          <h3 className="font-clash text-fs-60 font-semibold text-white-01 text-right lg:hidden">
            {name}
          </h3>
          <span className="font-clash text-fs-60 font-semibold text-white-01 hidden lg:block">
            View product
          </span>
          <Button
            as="link"
            to={`/marketplace/${id}`}
            className="w-[4.875rem] h-[4.921875rem] rounded-full border border-white-01 
            flex items-center justify-center hover:bg-white-01/20 ease-linear duration-500"
          >
            <BsArrowRight color="white" className="overflow-hidden" size={34} />
          </Button>
        </figcaption>
      </figure>
      <article className="lg:flex lg:flex-col lg:justify-between lg:group-even/order:order-first">
        <h3 className="font-stix font-bold text-fs-80 hidden lg:block">
          {name}
        </h3>
        <p className="font-normal text-black-04 leading-lh-40">{description}</p>

        <div
          className="flex items-center gap-4 py-4 border-b border-black-01 
          w-min lg:w-full lg:border-transparent"
        >
          <ul className="personsGrid max-w-[12.5rem]">
            {creators.map((creator) => (
              <li
                key={creator.id}
                className="w-10 h-10 rounded-full overflow-hidden border border-blue-02"
              >
                <img
                  className="w-full h-full"
                  src={creator.photo}
                  alt="Art Creator"
                />
              </li>
            ))}
          </ul>

          <p className="text-fs-30 font-semibold text-black-01 flex-wrap whitespace-nowrap">
            64 major curators
          </p>

          <Button
            to={`/marketplace/${id}`}
            className="w-[4.875rem] h-[4.875rem] rounded-full border border-black-03 ml-auto
            items-center justify-center hover:bg-white-01/10 ease-linear duration-500
            hidden lg:flex"
          >
            <Arrow color="#616161" className="overflow-hidden" />
          </Button>
        </div>
      </article>
    </>
  );
};

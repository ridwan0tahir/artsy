import { FunctionComponent, useMemo } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Section from '@layouts/Section';
import { useAppSelector } from '@store/store';

import CREATORS from '@data/creatorsData';
import { IProduct } from '@utils/constants/product';
import Button from '@components/common/Button';

export default function Featured() {
  const { globalProducts } = useAppSelector((store) => store.product);

  return (
    <Section>
      <h2
        className="font-bold text-[1.75rem] leading-[2.5rem] mb-8 mt-5
        lg:text-[3rem] lg:leading-[4.05rem] lg:mb-10 lg:mt-8"
      >
        Featured Products
      </h2>
      <FeaturedProductList products={globalProducts.slice(0, 3)} />
    </Section>
  );
}

/**
 * List component of the featured products
 */
interface IFeaturedProductList {
  products: IProduct[];
}

const FeaturedProductList = ({ products }: IFeaturedProductList) => (
  <ul role="list">
    {products.map(({ id, name, cover, description, creatorIds }) => {
      const configs = { id, name, cover, description, creatorIds };
      return (
        <li
          key={id}
          className="py-8 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:grid-flow-dense 
          lg:gap-14 group/order lg:py-14 lg:border-t lg:border-black-01"
        >
          <FeaturedProductCard {...configs} />
        </li>
      );
    })}
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
  creatorIds: string[];
}

const FeaturedProductCard: FunctionComponent<IFeaturedProductCard> = ({
  id,
  name,
  cover,
  description,
  creatorIds,
}) => {
  const creators = useMemo(() => {
    return CREATORS.filter((creator) => creatorIds.includes(creator.id));
  }, []);

  return (
    <>
      <figure
        className="relative h-[15.625rem] mb-4 group lg:m-0 cursor-pointer
        lg:h-[19.0625rem]"
      >
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
          <h3
            className="font-clash text-[1.875rem] font-[600] text-white-01 
            text-right lg:hidden"
          >
            {name}
          </h3>
          <span
            className="font-clash text-[1.875rem] font-[600] text-white-01 
            hidden lg:block"
          >
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
        <h3 className="font-stix font-[700] text-[2.5rem] leading-[3.125rem] hidden lg:block">
          {name}
        </h3>
        <p
          className="font-[400] text-black-04 text-[0.9375rem] leading-[1.453125rem]
          lg:text-[1.5rem] lg:leading-[2.025rem]"
        >
          {description}
        </p>

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

          <p
            className="text-[1rem] font-[600] text-black-01 flex-wrap whitespace-nowrap
            lg:text-[1.5rem] lg:leading-[2.025rem]"
          >
            64 major curators
          </p>

          <Button
            to={`/marketplace/${id}`}
            className="w-[4.875rem] h-[4.875rem] rounded-full border border-black-03 ml-auto
            items-center justify-center hover:bg-white-01/10 ease-linear duration-500
            hidden lg:flex"
          >
            <BsArrowRight
              color="#616161"
              className="overflow-hidden"
              size={40}
            />
          </Button>
        </div>
      </article>
    </>
  );
};

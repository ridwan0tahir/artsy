import { FunctionComponent } from "react";

import Arrow from "components/icons/Arrow";
import Button from "components/common/Button";
import { BsArrowRight } from "react-icons/bs";

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
      <FeaturedProductCardImage name={name} cover={cover} />
      <FeaturedProductCardDescription
        name={name}
        description={description}
        creators={creators}
      />
    </>
  );
};

export default FeaturedProductCard;

/*
  Types and Component for the card image
*/
interface IFeaturedProductCardImage {
  cover: string;
  name: string;
}
const FeaturedProductCardImage = ({
  cover,
  name,
}: IFeaturedProductCardImage) => (
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
        to="/marketplace/1"
        className="w-[4.875rem] h-[4.921875rem] rounded-full border border-white-01 
        flex items-center justify-center hover:bg-white-01/20 ease-linear duration-500"
      >
        <BsArrowRight color="white" className="overflow-hidden" size={34} />
      </Button>
    </figcaption>
  </figure>
);

/*
  Types and Component for the card description
*/
interface IFeaturedProductCardDescription {
  name: string;
  description: string;
  creators: { id: string; name: string; photo: string }[];
}
const FeaturedProductCardDescription = ({
  name,
  description,
  creators,
}: IFeaturedProductCardDescription) => (
  <article className="lg:flex lg:flex-col lg:justify-between lg:group-even/order:order-first">
    <h3 className="font-stix font-bold text-fs-80 hidden lg:block">{name}</h3>
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
        to="/marketplace/1"
        className="w-[4.875rem] h-[4.875rem] rounded-full border border-black-03 ml-auto
        items-center justify-center hover:bg-white-01/10 ease-linear duration-500
        hidden lg:flex"
      >
        <Arrow color="#616161" className="overflow-hidden" />
      </Button>
    </div>
  </article>
);

import { FunctionComponent } from "react";

interface IProductCard {
  id: string;
  name: string;
  price: string;
  cover: string;
}

const ProductCard: FunctionComponent<IProductCard> = ({
  id,
  name,
  price,
  cover,
}) => {
  return (
    <>
      <div
        className="h-[40vh] min-h-[17.5rem] mb-3 md:max-h-[17.5rem]
        md:rounded-lg md:overflow-hidden"
      >
        <img
          className="w-full h-full object-cover"
          src={cover}
          alt={name + " Product Image"}
        />
      </div>

      <p className="flex justify-between items-center md:flex-col md:gap-5 md:items-start">
        {name} <span>{`${price}`}</span>
      </p>
    </>
  );
};

export default ProductCard;

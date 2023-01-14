import { FunctionComponent } from "react";
import { MarketProductBar } from "./MarketProductBar";

import Button from "components/common/Button";
import Arrow from "components/icons/Arrow";
import ProductData from "data/ProductData";
import Section from "layouts/Section";
import { useAppDispatch, useAppSelector } from "slices/hooks";
import { updateCurrentPosition } from "slices/products/ProductSlice";
import { Link } from "react-router-dom";

export default function MarketDisplay() {
  const { modifiedProducts, currentPosition } = useAppSelector(
    (store) => store.product
  );
  const dispatch = useAppDispatch();

  return (
    <Section>
      <MarketProductBar products={[]} setProducts={() => null} />
      <MarketProductList
        products={modifiedProducts.slice(0, currentPosition)}
      />
      <MarketProductButton
        handleLoadMore={() => dispatch(updateCurrentPosition())}
        disabled={currentPosition >= modifiedProducts.length}
      />
    </Section>
  );
}

interface IMarketProductList {
  products: typeof ProductData;
}
export const MarketProductList = ({ products }: IMarketProductList) => (
  <ul className="grid gap-14 md:grid-cols-fluid mb-14">
    {products.map((product) => (
      <li
        key={product.id}
        className="p-4 lg:bg-white-01 lg:drop-shadow-sm lg:rounded-2xl"
      >
        <MarketProductCard
          id={product.id}
          name={product.name}
          price={product.price}
          cover={product.image_url}
        />
      </li>
    ))}
  </ul>
);

interface IMarketProductCard {
  id: string;
  name: string;
  price: number;
  cover: string;
}

const MarketProductCard: FunctionComponent<IMarketProductCard> = ({
  id,
  name,
  price,
  cover,
}) => {
  return (
    <Link to={`${id}`}>
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
        {name} <span>{`$${price.toFixed(2)}`}</span>
      </p>
    </Link>
  );
};

interface IMarketProductButton {
  handleLoadMore: () => void;
  disabled: boolean;
}
const MarketProductButton = ({
  handleLoadMore,
  disabled,
}: IMarketProductButton) => (
  <div className="text-fs-50 leading-lh-50 flex items-center justify-end gap-x-4">
    Load more
    <Button
      onClick={handleLoadMore}
      disabled={disabled}
      className="w-[3.1325rem] h-[3.1325rem] rounded-full border border-black-03 
        flex items-center justify-center"
    >
      <Arrow color="#616161" className="overflow-hidden" />
    </Button>
  </div>
);

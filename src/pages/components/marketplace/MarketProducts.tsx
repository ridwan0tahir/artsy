import ButtonIcon from "components/common/ButtonIcon";
import Arrow from "components/icons/Arrow";
import Chevron from "components/icons/Chevron";
import ProductData from "data/ProductData";
import ProductCard from "./ProductCard";

export const MarketBar = () => (
  <div
    className="px-5 py-4 flex items-center justify-between 
              drop-shadow bg-white mb-7 rounded-2xl font-normal text-fs-30"
  >
    <ButtonIcon
      className="flex items-center gap-4"
      content={
        <>
          Filter <Chevron />
        </>
      }
    />

    <ButtonIcon
      className="flex items-center gap-4"
      content={
        <>
          Sort by <Chevron />
        </>
      }
    />
  </div>
);

interface IProductList {
  products: typeof ProductData;
}

export const ProductList = ({ products }: IProductList) => (
  <ul className="grid space-y-10 md:grid-cols-fluid mb-14">
    {products.map((product) => (
      <li key={product.id} className=" p-3 shadow-md rounded-lg">
        <ProductCard
          id={product.id}
          name={product.name}
          price={product.price}
          cover={product.image_url}
        />
      </li>
    ))}
  </ul>
);

interface ILoadMoreButton {
  handleLoadMore: () => void;
  disabled: boolean;
}
export const LoadMoreButton = ({
  handleLoadMore,
  disabled,
}: ILoadMoreButton) => (
  <p className="text-fs-50 leading-lh-50 flex items-center justify-end gap-x-4">
    Load more
    <ButtonIcon
      onClick={handleLoadMore}
      disabled={disabled}
      className="w-[3.1325rem] h-[3.1325rem] rounded-full border border-black-03 
                flex items-center justify-center"
      content={<Arrow color="#616161" className="overflow-hidden" />}
    />
  </p>
);

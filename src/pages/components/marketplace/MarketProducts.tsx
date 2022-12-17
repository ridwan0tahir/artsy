import { HiOutlineChevronDown } from "react-icons/hi";
import ButtonIcon from "components/common/ButtonIcon";
import Arrow from "components/icons/Arrow";
import ProductData from "data/ProductData";
import ProductCard from "../ProductCard";

interface IMarketProductBar {
  showSortMenu: () => void;
  showFilterMenu: () => void;
}

export const MarketProductBar = ({
  showSortMenu,
  showFilterMenu,
}: IMarketProductBar) => (
  <div
    className="px-5 py-4 flex items-center justify-between 
    drop-shadow bg-white mb-7 rounded-2xl font-normal text-fs-30"
  >
    <ButtonIcon
      onClick={showFilterMenu}
      className="flex items-center gap-2"
      content={
        <>
          Filter <HiOutlineChevronDown size={16} />
        </>
      }
    />

    <ButtonIcon
      onClick={showSortMenu}
      className="flex items-center gap-2"
      content={
        <>
          Sort by <HiOutlineChevronDown size={16} />
        </>
      }
    />
  </div>
);

interface IMarketProductList {
  products: typeof ProductData;
}

export const MarketProductList = ({ products }: IMarketProductList) => (
  <ul className="grid space-y-10 md:grid-cols-fluid mb-14">
    {products.map((product) => (
      <li key={product.id} className=" p-3 shadow-sm rounded-lg">
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

interface IMarketProductButton {
  handleLoadMore: () => void;
  disabled: boolean;
}
export const MarketProductButton = ({
  handleLoadMore,
  disabled,
}: IMarketProductButton) => (
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

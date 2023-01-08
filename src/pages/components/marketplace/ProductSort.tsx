import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useMemo,
} from "react";
import ProductSortConfigs from "configs/ProductSortConfigs";
import RadioButton from "components/common/RadioButton";

import ProductData from "data/ProductData";
import { Sort } from "./MarketProductBar";

interface IProductSort {
  activeSort: Sort;
  setActiveSort: Dispatch<SetStateAction<Sort>>;
  products: typeof ProductData;
  setProducts: Dispatch<SetStateAction<typeof ProductData>>;
}

const ProductSort = ({
  activeSort,
  setActiveSort,
  products,
  setProducts,
}: IProductSort) => {
  // const worker = useMemo(() => {
  //   return new Worker("/src/services/sort.ts", {
  //     name: "worker-sort",
  //     type: "module",
  //   });
  // }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setActiveSort(Number(e.target.value));
  };

  useLayoutEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  // useEffect(() => {
  //   worker.postMessage({ activeSort, products });
  //   worker.onmessage = (ev) => {
  //     const products = ev.data;
  //     setProducts(products);
  //   };
  // }, [activeSort]);

  return (
    <form
      className="bg-white-01 drop-shadow px-5 py-3 rounded-2xl"
      onSubmit={(e) => e.preventDefault()}
    >
      {ProductSortConfigs.map((config, index) => (
        <RadioButton
          {...config}
          key={config.id}
          className="flex items-center justify-between py-2"
          checked={activeSort === Number(Object.keys(Sort)[index])}
          value={Number(Object.keys(Sort)[index])}
          onChange={handleChange}
        />
      ))}
    </form>
  );
};

export default ProductSort;

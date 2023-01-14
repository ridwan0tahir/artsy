import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ProductSortConfigs from "configs/ProductSortConfigs";
import RadioButton from "components/common/RadioButton";

import ProductData from "data/ProductData";
import { Sort } from "./MarketProductBar";
import { useAppDispatch, useAppSelector } from "slices/hooks";
import { setSortBy } from "slices/sort/SortSlice";
import { setProducts } from "slices/products/ProductSlice";

const ProductSort = () => {
  const { sortBy } = useAppSelector((store) => store.sort);
  const { globalProducts: products } = useAppSelector((store) => store.product);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSortBy(Number(e.target.value)));
  };

  const worker = useMemo(() => {
    return new Worker("/src/services/sort.ts", {
      name: "worker_sort",
      type: "module",
    });
  }, []);

  const [renderFlag, setRenderFlag] = useState(true);

  useEffect(() => {
    if (renderFlag) {
      setRenderFlag(false);
      return;
    }

    worker.postMessage({ sortBy, products });
    worker.onmessage = (e) => dispatch(setProducts(e.data));
  }, [sortBy]);

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
          checked={sortBy === Number(Object.keys(Sort)[index])}
          value={Number(Object.keys(Sort)[index])}
          onChange={handleChange}
        />
      ))}
    </form>
  );
};

export default ProductSort;

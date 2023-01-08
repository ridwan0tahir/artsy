import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { PortalWithState } from "react-portal";

import { HiOutlineChevronDown } from "react-icons/hi";
import Button from "components/common/Button";
import ProductData from "data/ProductData";
import ProductSort from "./ProductSort";

export enum Sort {
  NONE,
  LOW,
  HIGH,
  DATE,
}
interface IMarketProductBar {
  showFilterMenu: () => void;
  products: typeof ProductData;
  setProducts: Dispatch<SetStateAction<typeof ProductData>>;
}

export const MarketProductBar = ({
  showFilterMenu,
  products,
  setProducts,
}: IMarketProductBar) => {
  const [activeSort, setActiveSort] = useState(Sort.NONE);

  const worker = useMemo(() => {
    return new Worker("/src/services/sort.ts", {
      name: "worker-sort",
      type: "module",
    });
  }, []);

  useEffect(() => {
    worker.postMessage({ activeSort, products });
    worker.onmessage = (ev) => {
      const products = ev.data;
      setProducts(products);
    };
    console.log("Jillian");
  }, [activeSort]);

  return (
    <div
      className="px-5 py-4 flex items-center justify-between 
      drop-shadow bg-white mb-7 rounded-2xl font-normal text-fs-30"
    >
      <Button onClick={showFilterMenu} className="flex items-center gap-2">
        Filter <HiOutlineChevronDown size={16} />
      </Button>

      <PortalWithState
        node={document && document.getElementById("modal")}
        closeOnOutsideClick
      >
        {({ openPortal, portal }) => (
          <>
            <Button onClick={openPortal} className="flex items-center gap-2">
              Sort by <HiOutlineChevronDown size={16} />
            </Button>
            {portal(
              <ProductSort
                activeSort={activeSort}
                setActiveSort={setActiveSort}
                products={products}
                setProducts={setProducts}
              />
            )}
          </>
        )}
      </PortalWithState>
      <div id="modal" className="absolute right-0 top-16 w-full z-[1000]"></div>
    </div>
  );
};

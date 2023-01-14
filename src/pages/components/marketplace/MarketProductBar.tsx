import {
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { PortalWithState } from "react-portal";

import { HiOutlineChevronDown } from "react-icons/hi";
import Button from "components/common/Button";
import ProductData from "data/ProductData";
import ProductSort from "./ProductSort";
import ProductFilter from "./ProductFilter";
import { useMediaQuery } from "usehooks-ts";
import { useAppDispatch, useAppSelector } from "slices/hooks";
import {
  closeFilterModal,
  openFilterModal,
} from "slices/filter/FilterModalSlice";
import { closeSortModal, openSortModal } from "slices/sort/SortModalSlice";

export enum Sort {
  NONE,
  LOW,
  HIGH,
  DATE,
}
interface IMarketProductBar {
  products: typeof ProductData;
  setProducts: Dispatch<SetStateAction<typeof ProductData>>;
}

export const MarketProductBar = ({
  products,
  setProducts,
}: IMarketProductBar) => {
  const { isSortOpen } = useAppSelector((store) => store.sortModal);
  const dispatch = useAppDispatch();

  const matches = useMediaQuery("(min-width: 1024px)");

  useLayoutEffect(() => {
    if (isSortOpen) {
      document.body.classList.add("overflow-hidden");
      return;
    }

    document.body.classList.remove("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, [isSortOpen]);

  return (
    <div
      className="px-5 py-4 flex items-center justify-between 
      drop-shadow bg-white mb-7 rounded-2xl font-normal text-fs-30"
    >
      <PortalWithState
        node={document && document.getElementById("filter__modal")}
        closeOnOutsideClick
        onOpen={() => dispatch(openFilterModal())}
        onClose={() => dispatch(closeFilterModal())}
      >
        {({ openPortal, portal, closePortal }) => (
          <>
            {matches ? (
              <p>Showing results</p>
            ) : (
              <Button onClick={openPortal} className="flex items-center gap-2">
                Filter <HiOutlineChevronDown size={16} />
              </Button>
            )}
            {portal(
              <ProductFilter
                close={closePortal}
                products={products}
                setProducts={setProducts}
              />
            )}
          </>
        )}
      </PortalWithState>

      <PortalWithState
        node={document && document.getElementById("sort__modal")}
        closeOnOutsideClick
        onOpen={() => dispatch(openSortModal())}
        onClose={() => dispatch(closeSortModal())}
      >
        {({ openPortal, portal }) => (
          <>
            <Button onClick={openPortal} className="flex items-center gap-2">
              Sort by <HiOutlineChevronDown size={16} />
            </Button>
            {portal(<ProductSort />)}
          </>
        )}
      </PortalWithState>
      <div
        id="sort__modal"
        className="absolute right-0 top-16 w-full z-[1000]"
      ></div>
      {isSortOpen ? (
        <div
          className="fixed left-0 top-16 w-full h-screen bg-black-02/60
          rounded-t-2xl"
        ></div>
      ) : null}
    </div>
  );
};

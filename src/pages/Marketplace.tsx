import { useEffect, useLayoutEffect } from "react";
import classNames from "classnames";
import ProductFilter from "./components/marketplace/ProductFilter";
import MarketDisplay from "./components/marketplace/MarketDisplay";
import { useAppSelector } from "slices/hooks";

export default function Marketplace() {
  useEffect(() => {
    document.title = "Artsy | Marketplace";
  }, []);

  const { isFilterOpen } = useAppSelector((store) => store.filterModal);
  useLayoutEffect(() => {
    if (isFilterOpen) {
      document.body.classList.add("overflow-hidden");
      return;
    }

    document.body.classList.remove("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, [isFilterOpen]);

  return (
    <div className="w-[90%] mx-auto lg:grid lg:grid-cols-[244px_1fr] gap-x-10">
      <aside className="hidden lg:block">
        <ProductFilter
          close={() => null}
          products={[]}
          setProducts={() => null}
        />
      </aside>

      <MarketDisplay />

      <div
        id="filter__modal"
        className={classNames(
          "left-0 top-0 w-[70%] h-full bg-white-01 z-[50] px-4 py-10",
          {
            ["fixed "]: isFilterOpen,
            ["hidden"]: !isFilterOpen,
          }
        )}
      ></div>
      {isFilterOpen ? (
        <div className="fixed left-0 top-0 w-full h-screen bg-black-02/60 z-10"></div>
      ) : null}
    </div>
  );
}

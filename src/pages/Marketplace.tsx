import {
  ChangeEvent,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";
import { ProductContext } from "providers/ProductProvider";
import Section from "layouts/section/Section";

/**
  Market section imports
**/
import {
  MarketProductBar,
  MarketProductList,
  MarketProductButton,
} from "./components/marketplace/MarketProducts";

/**
  Filter and Sort Modal imports  
**/
import {
  MarketFilterModal,
  MarketSortModal,
} from "./components/marketplace/MarketModal";
import ProductData from "data/ProductData";

interface IModalAction {
  type: "SHOWFILTER" | "SHOWSORT";
  payload: boolean;
}
interface IModalState {
  sort: boolean;
  filter: boolean;
}

const modalReducer = (state: IModalState, action: IModalAction) => {
  switch (action.type) {
    case "SHOWFILTER":
      return { ...state, filter: action.payload };

    case "SHOWSORT":
      return { ...state, sort: action.payload };

    default:
      return state;
  }
};

interface ISortState {
  products: typeof ProductData;
}

interface ISortAction {
  type: Sort;
  payload: typeof ProductData;
}

const sortReducer = (state: ISortState, action: ISortAction) => {
  switch (action.type) {
    case Sort.NONE:
      return { ...state, products: action.payload };

    case Sort.LOW:
      const sortedLow = action.payload.sort(
        (itemA, itemB) => itemA.price - itemB.price
      );
      return { ...state, products: sortedLow };

    case Sort.HIGH:
      const sortedHigh = action.payload.sort(
        (itemA, itemB) => itemB.price - itemA.price
      );
      return { ...state, products: sortedHigh };

    default:
      return state;
  }
};

export enum Sort {
  NONE,
  LOW,
  HIGH,
  DATE,
}

const Marketplace = () => {
  const { products: globalProducts } = useContext(ProductContext);

  const [fetchedProducts, setFetchedProducts] = useState(globalProducts);

  const [displayProducts, setDisplayProducts] = useState(
    fetchedProducts.slice(0, 5)
  );

  const offsetBy = (len: number) => {
    if (displayProducts.length + len <= fetchedProducts.length) {
      return displayProducts.length + len;
    }

    return fetchedProducts.length;
  };

  const fetchMoreProducts = () => {
    setDisplayProducts((current) => [
      ...current,
      ...fetchedProducts.slice(current.length, offsetBy(5)),
    ]);
  };

  const [modalState, modalDispatch] = useReducer(modalReducer, {
    sort: false,
    filter: false,
  });

  useLayoutEffect(() => {
    if (
      (modalState.sort && !modalState.filter) ||
      (!modalState.sort && modalState.filter)
    ) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [modalState.sort, modalState.filter]);

  const [activeSort, setActiveSort] = useState(Sort.NONE);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setActiveSort(Number(e.target.value));
  };

  const handleSubmit = async () => {
    if (activeSort === Sort.NONE) {
      const sortedNone: Promise<typeof ProductData> = new Promise((resolve) => {
        const sorted = fetchedProducts.sort((itemA, itemB) =>
          itemA.id.localeCompare(itemB.id)
        );
        resolve(sorted);
      });

      setFetchedProducts(await sortedNone);
    } else if (activeSort === Sort.LOW) {
      const sortedLow: Promise<typeof ProductData> = new Promise((resolve) => {
        const sorted = fetchedProducts.sort(
          (itemA, itemB) => itemA.price - itemB.price
        );
        resolve(sorted);
      });

      setFetchedProducts(await sortedLow);
    } else if (activeSort === Sort.HIGH) {
      const sortedLow: Promise<typeof ProductData> = new Promise((resolve) => {
        const sorted = fetchedProducts.sort(
          (itemA, itemB) => itemB.price - itemA.price
        );
        resolve(sorted);
      });

      setFetchedProducts(await sortedLow);
    }

    setDisplayProducts(fetchedProducts.slice(0, 5));
    modalDispatch({ type: "SHOWSORT", payload: false });
  };

  return (
    <div className="w-[90%] mx-auto">
      <Section
        content={
          <>
            <MarketProductBar
              showFilterMenu={() =>
                modalDispatch({ type: "SHOWFILTER", payload: true })
              }
              showSortMenu={() =>
                modalDispatch({ type: "SHOWSORT", payload: true })
              }
            />
            <MarketProductList products={displayProducts} />
            <MarketProductButton
              handleLoadMore={fetchMoreProducts}
              disabled={displayProducts.length >= globalProducts.length}
            />
          </>
        }
      />

      <MarketSortModal
        show={modalState.sort}
        close={() => modalDispatch({ type: "SHOWSORT", payload: false })}
        activeSort={activeSort}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <MarketFilterModal
        show={modalState.filter}
        close={() => modalDispatch({ type: "SHOWFILTER", payload: false })}
        handleSubmit={() => null}
      />

      {modalState.sort || modalState.filter ? (
        <div className="imageGradient absolute left-0 top-0 w-full h-full z-20"></div>
      ) : null}
    </div>
  );
};

export default Marketplace;

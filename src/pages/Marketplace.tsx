import Section from "layouts/section/Section";
import {
  ChangeEvent,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";
import { ProductContext } from "providers/ProductProvider";
import {
  MarketProductBar,
  MarketProductList,
  MarketProductButton,
} from "./components/marketplace/MarketProducts";
import Modal from "components/common/Modal";
import Radio from "components/common/Radio";
import {
  MarketFilterModal,
  MarketSortModal,
} from "./components/marketplace/MarketModal";

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

export enum Sort {
  NONE,
  LOW,
  HIGH,
  DATE,
}

const Marketplace = () => {
  const { products: globalProduct } = useContext(ProductContext);

  const [mainProduct, setMainProduct] = useState(globalProduct);
  const [products, setProducts] = useState(mainProduct.slice(0, 5));
  const [isSorted, setIsSorted] = useState(false);

  const offsetBy = (len: number) => {
    if (products.length + len <= globalProduct.length) {
      return products.length + len;
    }

    return globalProduct.length;
  };

  const handleLoadMore = () => {
    setProducts((current) => [
      ...current,
      ...globalProduct.slice(current.length, offsetBy(5)),
    ]);
  };

  const initialState = {
    sort: false,
    filter: false,
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);

  useLayoutEffect(() => {
    if ((state.sort && !state.filter) || (!state.sort && state.filter)) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [state.sort, state.filter]);

  const [activeSort, setActiveSort] = useState(Sort.NONE);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setActiveSort(Number(e.target.value));
  };

  useEffect(() => {
    setProducts(mainProduct.slice(0, 5));
  }, [isSorted]);

  const handleSort = () => {
    dispatch({ type: "SHOWSORT", payload: false });
    const sorted = mainProduct.sort(
      (itemA, itemB) => itemA.price - itemB.price
    );
    setMainProduct(sorted);
    setIsSorted((current) => !current);
  };

  return (
    <div className="w-[90%] mx-auto">
      <Section
        content={
          <>
            <MarketProductBar
              showFilterMenu={() =>
                dispatch({ type: "SHOWFILTER", payload: true })
              }
              showSortMenu={() => dispatch({ type: "SHOWSORT", payload: true })}
            />
            <MarketProductList products={products} />
            <MarketProductButton
              handleLoadMore={handleLoadMore}
              disabled={products.length >= globalProduct.length}
            />
          </>
        }
      />

      <MarketSortModal
        show={state.sort}
        close={() => dispatch({ type: "SHOWSORT", payload: false })}
        activeSort={activeSort}
        handleSubmit={handleSort}
        handleChange={handleChange}
      />

      <MarketFilterModal
        show={state.filter}
        close={() => dispatch({ type: "SHOWFILTER", payload: false })}
        handleSubmit={() => null}
      />

      {state.sort || state.filter ? (
        <div className="imageGradient absolute left-0 top-0 w-full h-full z-20"></div>
      ) : null}
    </div>
  );
};

export default Marketplace;

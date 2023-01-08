import {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";
import { ProductContext } from "providers/ProductProvider";
import Section from "layouts/Section";
import classNames from "classnames";
import ProductFilter from "./components/marketplace/ProductFilter";
import MarketDisplay from "./components/marketplace/MarketDisplay";

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

const Marketplace = () => {
  const { products: globalProducts } = useContext(ProductContext);

  const [products, setProducts] = useState(globalProducts);

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

  return (
    <div className="w-[90%] mx-auto lg:grid lg:grid-cols-[244px_1fr] gap-x-10">
      <Section
        className={classNames(
          "fixed top-0 w-[70%] h-full bg-white-01 z-[100] px-4 py-8 drop-shadow \
          lg:unset",
          {
            ["-left-[1000px] invisible opacity-0 pointer-events-none"]:
              !modalState.filter,
            ["left-0 visible opacity-100 pointer-events-auto"]:
              modalState.filter,
          }
        )}
      >
        <ProductFilter
          close={() => modalDispatch({ type: "SHOWFILTER", payload: false })}
          products={products}
          setProducts={setProducts}
        />
      </Section>

      <MarketDisplay
        products={products}
        setProducts={setProducts}
        showFilter={() => modalDispatch({ type: "SHOWFILTER", payload: true })}
      />
    </div>
  );
};

export default Marketplace;

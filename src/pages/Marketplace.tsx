import Section from "components/layouts/Section";
import { useContext, useMemo, useState } from "react";
import { ProductContext } from "providers/ProductProvider";
import {
  LoadMoreButton,
  MarketBar,
  ProductList,
} from "./components/marketplace/MarketProducts";
import Modal from "components/common/Modal";

const Marketplace = () => {
  const { products: globalProduct } = useContext(ProductContext);

  const [products, setProducts] = useState(globalProduct.slice(0, 5));

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

  return (
    <div className="w-[90%] mx-auto">
      <Section
        content={
          <>
            <MarketBar />
            <ProductList products={products} />
            <LoadMoreButton
              handleLoadMore={handleLoadMore}
              disabled={products.length >= globalProduct.length}
            />
          </>
        }
      />
    </div>
  );
};

export default Marketplace;

import Chevron from "components/icons/Chevron";
import Section from "components/layouts/Section";
import ButtonIcon from "components/common/ButtonIcon";
import ProductCard from "./components/marketplace/ProductCard";
import { useContext, useMemo, useState } from "react";
import { ProductContext } from "providers/ProductProvider";
import Arrow from "components/icons/Arrow";

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
            <div
              className="px-5 py-4 flex items-center justify-between 
              drop-shadow bg-white mb-7 rounded-2xl font-normal text-fs-30"
            >
              <ButtonIcon
                className="flex items-center gap-4"
                content={
                  <>
                    Filter <Chevron />
                  </>
                }
              />

              <ButtonIcon
                className="flex items-center gap-4"
                content={
                  <>
                    Sort by <Chevron />
                  </>
                }
              />
            </div>
            <ul className="grid space-y-10 md:grid-cols-fluid">
              {products.map((product) => (
                <li key={product.id} className=" p-3 shadow-md rounded-lg">
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    cover={product.image_url}
                  />
                </li>
              ))}
            </ul>

            <p className="text-fs-50 leading-lh-50 flex items-center justify-end gap-x-4">
              Load more
              <ButtonIcon
                onClick={handleLoadMore}
                disabled={products.length >= globalProduct.length}
                className="w-[3.1325rem] h-[3.1325rem] rounded-full border border-black-03 
                flex items-center justify-center"
                content={<Arrow color="#616161" className="overflow-hidden" />}
              />
            </p>
          </>
        }
      />
    </div>
  );
};

export default Marketplace;

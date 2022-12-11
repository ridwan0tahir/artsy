import { createContext, FunctionComponent, ReactNode, useState } from "react";
import ProductData from "data/ProductData";

interface IProductContext {
  products: typeof ProductData;
}

export const ProductContext = createContext<IProductContext>({
  products: [],
});

interface IProductProvider {
  children: ReactNode;
}

const ProductProvider: FunctionComponent<IProductProvider> = ({ children }) => {
  const [products] = useState(ProductData);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

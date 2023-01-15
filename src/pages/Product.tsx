import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "slices/hooks";
import ProductDisplay from "./components/product/ProductDisplay";

const Product: FunctionComponent = () => {
  const param = useLocation();

  const { globalProducts } = useAppSelector((store) => store.product);
  const product = globalProducts.find(
    (prod) => prod.id === param.pathname.split("/")[2]
  );

  const { name, artist, image_url, price, country, views, description } =
    product!;
  const productDisplayConfigs = {
    name,
    artist,
    price,
    country,
    views,
    description,
  };

  return (
    <div className="w-[90%] mx-auto text-black-03 text-fs-30 leading-lh-50">
      <ProductDisplay {...productDisplayConfigs} cover={image_url} />
    </div>
  );
};

export default Product;

import ProductData from "data/ProductData";
import FeaturedProductCard from "../FeaturedProductCard";

interface IFeaturedProductList {
  products: typeof ProductData;
}

export const FeaturedProductList = ({ products }: IFeaturedProductList) => (
  <ul role="list">
    {products.map((product) => (
      <li
        key={product.id}
        className="py-8 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:grid-flow-dense 
        lg:gap-14 group/order lg:py-14 lg:border-t lg:border-black-01"
      >
        <FeaturedProductCard
          id={product.id}
          name={product.name}
          cover={product.image_url}
          description={product.description}
          creators={product.creators}
        />
      </li>
    ))}
  </ul>
);

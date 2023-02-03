import { FunctionComponent, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'store/store';
import ProductCollection from './components/product/ProductCollection';
import ProductDisplay from './components/product/ProductDisplay';

export default function Product() {
  const param = useLocation();

  const { globalProducts } = useAppSelector((store) => store.product);
  const product = useMemo(
    () =>
      globalProducts.find((prod) => prod.id === param.pathname.split('/')[2]),
    []
  );

  const collections = useMemo(() => {
    const filtered = globalProducts.filter(
      (prod) => prod.category === product?.category && prod.id !== product.id
    );
    if (filtered.length >= 5) {
      return filtered.slice(0, 5);
    }
    return filtered;
  }, []);

  return (
    <div className="w-[90%] mx-auto text-black-03 text-fs-30 leading-lh-50">
      <ProductDisplay product={product!} />
      <ProductCollection products={collections} />
    </div>
  );
}

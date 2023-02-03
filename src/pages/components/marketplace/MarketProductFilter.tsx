import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  FunctionComponent,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Checkbox from '@components/common/Checkbox';

import ProductFilterConfigs from 'configs/ProductFilterConfigs';
import RangeSlider from 'components/common/RangeSlider';
import ProductData from '@data/products';
import { useAppDispatch, useAppSelector } from 'store/store';
import {
  addToArtist,
  addToCategory,
  removeFromArtist,
  removeFromCategory,
  setPrice,
} from 'store/filter/FilterSlice';
import { MdTune } from 'react-icons/md';
import { IProduct } from '@utils/constants/product';

interface IMarketProductFilter {
  close: () => void;
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
}
export default function MarketProductFilter({
  close,
  products,
  setProducts,
}: IMarketProductFilter) {
  const { categories, artists, price } = useAppSelector(
    (store) => store.filter
  );
  const dispatch = useAppDispatch();

  const { category: categoryConfigs, artist: artistConfigs } =
    ProductFilterConfigs;

  const worker = useMemo(() => {
    return new Worker('/src/services/filter.ts', {
      name: 'worker-filter',
      type: 'module',
    });
  }, []);

  // const { products: globalP } = useContext(ProductContext);

  // useEffect(() => {
  //   worker.postMessage({ selectedCategories, selectedArtist, price, products });
  //   worker.onmessage = (ev) => {
  //     const products = ev.data;
  //     if (products.length <= 0) return;
  //     console.log(products);
  //   };
  // }, [selectedCategories, selectedArtist, price.min, price.max]);

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!categories.includes(value)) {
      dispatch(addToCategory(value));
    } else {
      dispatch(removeFromCategory(value));
    }
  };

  const handleArtistChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!artists.includes(value)) {
      dispatch(addToArtist(value));
    } else {
      dispatch(removeFromArtist(value));
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={close}
        className="flex items-center w-full gap-x-2 pb-1 mb-5 border-b-2 border-black-03"
      >
        <MdTune />
        Filter
      </button>
      <div className="grid space-y-8">
        <div>
          <h3 className="mb-2 font-semibold">Category</h3>
          <div className="grid grid-cols-filter justify-items-start gap-y-2 px-2">
            {categoryConfigs.map((configs) => (
              <Checkbox
                key={configs.id}
                {...configs}
                onChange={handleCategoryChange}
                onClick={(e) => e.stopPropagation()}
                checked={categories.includes(configs.label)}
                className="flex flex-row-reverse items-center gap-x-2"
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Price</h3>
          <p className="mb-4 px-2">{`$${price.min} - $${price.max}`}</p>
          <RangeSlider
            min={0}
            max={50}
            step={1}
            thumbsCap={10}
            onChange={({ min, max }) => dispatch(setPrice({ min, max }))}
            className="px-2"
          />
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Artist</h3>
          <div className="grid grid-cols-filter justify-items-start gap-y-2 px-2">
            {artistConfigs.map((configs) => (
              <Checkbox
                key={configs.id}
                {...configs}
                onChange={handleArtistChange}
                onClick={(e) => e.stopPropagation()}
                checked={artists.includes(configs.value)}
                className="flex flex-row-reverse items-center gap-x-2"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

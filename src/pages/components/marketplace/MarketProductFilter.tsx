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
import { useMediaQuery } from 'usehooks-ts';

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

  const matches = useMediaQuery('(max-width:1024px)');

  return (
    <>
      <button
        type="button"
        onClick={close}
        className="flex items-center w-full gap-2 pb-1 mb-10 border-b-4 border-[hsla(62,16%,63%,1)]
        text-[1.5rem] leading-[2rem] lg:text-[2rem] lg:leading-[3.151875rem] lg:gap-5"
      >
        <MdTune size={matches ? 24 : 36} />
        Filter
      </button>
      <div className="grid space-y-12 lg:space-y-20">
        <div>
          <h3
            className="mb-2 font-[500] text-[1.25rem] leading-[2.25rem]
            lg:text-[1.75rem] lg:leading-[2.758rem]"
          >
            Category
          </h3>
          <div
            className="grid grid-cols-filter justify-items-start gap-y-2 px-2
            lg:gap-y-4"
          >
            {categoryConfigs.map((configs) => (
              <Checkbox
                key={configs.id}
                {...configs}
                onChange={handleCategoryChange}
                onClick={(e) => e.stopPropagation()}
                checked={categories.includes(configs.label)}
                className="flex items-center gap-x-2 text-[1.125rem] lg:gap-x-4 lg:text-[1.25rem]"
              />
            ))}
          </div>
        </div>

        <div>
          <h3
            className="mb-2 font-[500] text-[1.25rem] leading-[2.25rem]
            lg:text-[1.75rem] lg:leading-[2.758rem]"
          >
            Price
          </h3>
          <p className="mb-4 px-2 text-[1.125rem] lg:text-[1.25rem]">{`$${price.min} - $${price.max}`}</p>
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
          <h3
            className="mb-2 font-[500] text-[1.25rem] leading-[2.25rem]
            lg:text-[1.75rem] lg:leading-[2.758rem]"
          >
            Artist
          </h3>
          <div
            className="grid grid-cols-filter justify-items-start gap-y-2 px-2
            lg:gap-y-4"
          >
            {artistConfigs.map((configs) => (
              <Checkbox
                key={configs.id}
                {...configs}
                onChange={handleArtistChange}
                onClick={(e) => e.stopPropagation()}
                checked={artists.includes(configs.value)}
                className="flex items-center gap-x-2 text-[1.125rem] lg:gap-x-4 lg:text-[1.25rem]"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

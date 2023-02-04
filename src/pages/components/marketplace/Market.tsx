import { FunctionComponent } from 'react';
import { Dispatch, SetStateAction, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { PortalWithState } from 'react-portal';

import { useMediaQuery } from 'usehooks-ts';

import { HiOutlineChevronDown } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';

import { useAppDispatch, useAppSelector } from '@store/store';
import { updateCurrentPosition } from '@store/products/ProductSlice';
import {
  closeFilterModal,
  openFilterModal,
} from '@store/filter/FilterModalSlice';
import { closeSortModal, openSortModal } from '@store/sort/SortModalSlice';

import MarketProductSort from '@pages/components/marketplace/MarketProductSort';
import MarketProductFilter from '@pages/components/marketplace/MarketProductFilter';

import Button from '@components/common/Button';
import Section from '@layouts/Section';

import { IProduct } from '@utils/constants/product';

export default function Market() {
  const { modifiedProducts, currentPosition } = useAppSelector(
    (store) => store.product
  );
  const dispatch = useAppDispatch();

  return (
    <Section>
      <MarketBar products={[]} setProducts={() => null} />
      <MarketProductList
        products={modifiedProducts.slice(0, currentPosition)}
      />
      <MarketLoadButton
        handleLoadMore={() => dispatch(updateCurrentPosition())}
        disabled={currentPosition >= modifiedProducts.length}
      />
    </Section>
  );
}

interface IMarketProductList {
  products: IProduct[];
}
export const MarketProductList = ({ products }: IMarketProductList) => (
  <ul className="grid gap-14 md:grid-cols-fluid mb-14">
    {products.map((product) => (
      <li
        key={product.id}
        className="p-4 lg:bg-white-01 lg:drop-shadow-sm lg:rounded-2xl"
      >
        <MarketProductCard
          id={product.id}
          name={product.name}
          price={product.price}
          cover={product.cover}
        />
      </li>
    ))}
  </ul>
);

interface IMarketProductCard {
  id: string;
  name: string;
  price: number;
  cover: string;
}

const MarketProductCard: FunctionComponent<IMarketProductCard> = ({
  id,
  name,
  price,
  cover,
}) => {
  return (
    <Link to={`${id}`}>
      <div
        className="h-[40vh] min-h-[17.5rem] mb-3 md:max-h-[17.5rem]
        md:rounded-lg md:overflow-hidden"
      >
        <img
          className="w-full h-full object-cover"
          src={cover}
          alt={name + ' Product Image'}
        />
      </div>

      <h3
        className="flex justify-between items-center text-[1rem] leading-[1.57625rem]
        font-[500] uppercase md:flex-col md:gap-5 md:items-start"
      >
        {name} <p>{`$${price.toFixed(2)}`}</p>
      </h3>
    </Link>
  );
};

interface IMarketLoadButton {
  handleLoadMore: () => void;
  disabled: boolean;
}
const MarketLoadButton = ({ handleLoadMore, disabled }: IMarketLoadButton) => (
  <Button
    onClick={handleLoadMore}
    disabled={disabled}
    className="text-[1.25rem] leading-[1.97rem] flex items-center justify-end 
    font-[400] gap-x-4 ml-auto pr-[16px] disabled:opacity-50 group"
  >
    Load more
    <BsArrowRight
      color="#616161"
      size={34}
      className="p-[0.53125rem] box-content rounded-full border border-black-03 
      flex items-center justify-center group-hover:bg-[hsl(0,0%,90%)]"
    />
  </Button>
);

export enum Sort {
  NONE,
  LOW,
  HIGH,
  DATE,
}
interface IMarketBar {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
}

const MarketBar = ({ products, setProducts }: IMarketBar) => {
  const { isSortOpen } = useAppSelector((store) => store.sortModal);
  const dispatch = useAppDispatch();

  const matches = useMediaQuery('(min-width: 1024px)');

  useLayoutEffect(() => {
    if (isSortOpen) {
      document.body.classList.add('overflow-hidden');
      return;
    }

    document.body.classList.remove('overflow-hidden');

    return () => document.body.classList.remove('overflow-hidden');
  }, [isSortOpen]);

  return (
    <div
      className="px-5 py-4 flex items-center justify-between font-[400]
      leading-[1.51875rem] shadow-[4px_4px_64px_0px_hsla(0,0%,0%,0.1)]
       bg-white mb-7 rounded-2xl text-[1.125rem]"
    >
      <PortalWithState
        node={document && document.getElementById('filter__modal')}
        closeOnOutsideClick
        onOpen={() => dispatch(openFilterModal())}
        onClose={() => dispatch(closeFilterModal())}
      >
        {({ openPortal, portal, closePortal }) => (
          <>
            {matches ? (
              <p>Showing results</p>
            ) : (
              <Button onClick={openPortal} className="flex items-center gap-2">
                Filter <HiOutlineChevronDown size={16} />
              </Button>
            )}
            {portal(
              <MarketProductFilter
                close={closePortal}
                products={products}
                setProducts={setProducts}
              />
            )}
          </>
        )}
      </PortalWithState>

      <PortalWithState
        node={document && document.getElementById('sort__modal')}
        closeOnOutsideClick
        onOpen={() => dispatch(openSortModal())}
        onClose={() => dispatch(closeSortModal())}
      >
        {({ openPortal, portal }) => (
          <>
            <Button onClick={openPortal} className="flex items-center gap-2">
              Sort by <HiOutlineChevronDown size={16} />
            </Button>
            {portal(<MarketProductSort />)}
          </>
        )}
      </PortalWithState>
      <div
        id="sort__modal"
        className="absolute right-0 top-16 w-full z-[1000]"
      ></div>
      {isSortOpen ? (
        <div
          className="fixed left-0 top-16 w-full h-screen bg-black-02/60
          rounded-t-2xl"
        ></div>
      ) : null}
    </div>
  );
};

import { useEffect, useLayoutEffect } from 'react';
import { useAppSelector } from '@store/store';
import classNames from 'classnames';
import MarketProductFilter from '@pages/components/marketplace/MarketProductFilter';
import Market from '@pages/components/marketplace/Market';

export default function Marketplace() {
  useEffect(() => {
    document.title = 'Artsy | Marketplace';
  }, []);

  const { isFilterOpen } = useAppSelector((store) => store.filterModal);
  useLayoutEffect(() => {
    if (isFilterOpen) {
      document.body.classList.add('overflow-hidden');
      return;
    }

    document.body.classList.remove('overflow-hidden');

    return () => document.body.classList.remove('overflow-hidden');
  }, [isFilterOpen]);

  return (
    <div className="w-[90%] mx-auto lg:grid lg:grid-cols-[244px_1fr] gap-x-10">
      <aside className="hidden lg:block">
        <MarketProductFilter
          close={() => null}
          products={[]}
          setProducts={() => null}
        />
      </aside>

      <Market />

      <div
        id="filter__modal"
        className={classNames(
          'left-0 top-0 w-[70%] h-full bg-white-01 z-[50] px-4 py-10',
          {
            ['fixed ']: isFilterOpen,
            ['hidden']: !isFilterOpen,
          }
        )}
      ></div>
      {isFilterOpen ? (
        <div className="fixed left-0 top-0 w-full h-screen bg-black-02/60 z-10"></div>
      ) : null}
    </div>
  );
}

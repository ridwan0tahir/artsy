import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { useMediaQuery } from 'usehooks-ts';
import Section from 'layouts/Section';
import FavThick from 'components/icons/FavThick';

import { FunctionComponent } from 'react';
import Button from 'components/common/Button';
import { IProduct } from '@utils/constants/product';

interface IProductCollection {
  products: IProduct[];
}
export default function ProductCollection({ products }: IProductCollection) {
  const matches = useMediaQuery('(min-width: 1024px)');

  return (
    <Section>
      <Section.Header
        label={!matches ? 'More from this collection' : null}
        content={
          matches ? (
            <div
              className="flex justify-between items-center mb-10 p-4 
              bg-white-01 drop-shadow rounded-lg"
            >
              <span>Explore more from this collection</span>
              <div className="flex items-center gap-x-5">
                <button id="prev">Prev</button>
                <button id="next">Next</button>
              </div>
            </div>
          ) : null
        }
      />
      <Swiper
        navigation={{
          nextEl: '#next',
          prevEl: '#prev',
        }}
        slidesPerView={matches ? 3 : 1}
        spaceBetween={30}
        modules={[Navigation]}
      >
        {products.map((prod) => (
          <SwiperSlide key={prod.id}>
            <ProdCollectionCard
              cover={prod.cover}
              name={prod.name}
              price={prod.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}

interface IProdCollectionCard {
  cover: string;
  name: string;
  price: number;
}
const ProdCollectionCard: FunctionComponent<IProdCollectionCard> = ({
  cover,
  name,
  price,
}) => {
  return (
    <div className="p-4 border border-black-03">
      <Button className="block ml-auto mb-2">
        {' '}
        <FavThick />{' '}
      </Button>
      <div className="h-[20rem] mb-2">
        <img className="w-full h-full object-cover" src={cover} alt={name} />
      </div>
      <div className="flex items-center justify-between text-fs-50 capitalize">
        <h3>{name}</h3>
        <p>{`$${price}`}</p>
      </div>
    </div>
  );
};

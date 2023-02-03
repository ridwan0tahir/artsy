import { addToCart } from '@store/cart/CartSlice';
import { useAppDispatch } from '@store/store';
import { IProduct } from '@utils/constants/product';
import classNames from 'classnames';
import Button from 'components/common/Button';
import Chevron from 'components/icons/Chevron';
import FavThin from 'components/icons/FavThin';
import Section from 'layouts/Section';
import { FunctionComponent, ReactNode, useState } from 'react';

interface IProductDisplay {
  product: IProduct;
}
export default function ProductDisplay({ product }: IProductDisplay) {
  const { name, cover } = product;
  return (
    <Section className="lg:grid lg:grid-cols-[525px_1fr]">
      <ProductImage cover={cover} alt={name} />
      <ProductContent product={product} />
    </Section>
  );
}

/**
 * Product Image Component
 */
interface IProductImage {
  cover: string;
  alt: string;
}
const ProductImage: FunctionComponent<IProductImage> = ({ cover, alt }) => (
  <figure
    className="h-[50vh] min-h-[20rem] mb-4 lg:h-full lg:px-6 lg:py-11 lg:border
    lg:border-black-02"
  >
    <img className="w-full h-full object-cover" src={cover} alt={alt} />
  </figure>
);

/**
 * Product Content Component
 */
interface IProductContent {
  product: IProduct;
}

const ProductContent: FunctionComponent<IProductContent> = ({ product }) => {
  const { name, description, price } = product;
  const items = [
    {
      title: 'cart',
      content: (className: string) => (
        <Cart product={product} className={className} />
      ),
    },
    {
      title: 'description',
      content: (className: string) => (
        <Description className={className} description={description} />
      ),
    },
    {
      title: 'listing',
      content: (className: string) => (
        <Listing className={className} listing={description} />
      ),
    },
    {
      title: 'status',
      content: (className: string) => (
        <Status className={className} status={description} />
      ),
    },
  ];
  return (
    <article className="lg:border lg:border-black-02 lg:border-l-0">
      <div
        className="flex items-center justify-between mb-3 uppercase lg:px-8 lg:py-12
      lg:border-b border-black-03"
      >
        <p>{name}</p>
        <p>{`${price}`}</p>
      </div>
      <Accordion items={items} />
    </article>
  );
};

/**
 * Extras for Product Content
 */
interface IAccordion {
  items: { title: string; content: (className: string) => ReactNode }[];
}
const Accordion: FunctionComponent<IAccordion> = ({ items }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
      <ul className="grid auto-rows-auto">
        {items.map((item, index) => {
          const { title, content } = item;
          return (
            <li
              key={title + index}
              className={classNames(
                'border-b border-black-03 py-5 lg:px-8 lg:py-12 lg:last:border-b-0'
              )}
            >
              <div
                className={classNames(
                  'flex items-center justify-between capitalize',
                  {
                    ['h-auto opacity-100 visible']: !(activeItem === index),
                    ['h-0 opacity-0 invisible']: activeItem === index,
                  }
                )}
                onClick={() => setActiveItem(index)}
              >
                {item.title}
                <Button>
                  <Chevron />
                </Button>
              </div>
              {content(
                classNames('[transition:transform_.5s_ease-in-out]', {
                  ['h-auto visible scale-y-100 origin-top']:
                    activeItem === index,
                  ['h-0 invisible scale-y-0']: !(activeItem === index),
                })
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

interface IAccordionItem {
  className: string;
}

interface IDescription extends IAccordionItem {
  description: string;
}
const Description: FunctionComponent<IDescription> = ({
  className,
  description,
}) => <p className={className}>{description}</p>;

interface IListing extends IAccordionItem {
  listing: string;
}
const Listing: FunctionComponent<IListing> = ({ className, listing }) => (
  <p className={className}>{listing}</p>
);

interface IStatus extends IAccordionItem {
  status: string;
}
const Status: FunctionComponent<IStatus> = ({ className, status }) => (
  <p className={className}>{status}</p>
);

interface ICart extends IAccordionItem {
  product: IProduct;
}
const Cart: FunctionComponent<ICart> = ({ product, className }) => {
  const dispatch = useAppDispatch();

  const { artist, country, views } = product;
  return (
    <div className={className}>
      <p className="capitalize text-black-01 mb-4">
        Creator&nbsp;:&nbsp;
        <span className="!text-blue-03">{artist}</span>
      </p>
      <p className="text-black-04 mb-4">{`Made in ${country}`}</p>
      <p className="text-black-04 mb-5">{`Total views: ${views}`}</p>

      <div className="flex items-center gap-6 text-fs-60 mb-5">
        <button>+</button>
        <span>1</span>
        <button>-</button>
      </div>

      <div className="flex items-center gap-5 flex-wrap">
        <button
          type="button"
          className="btn-primary"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </button>
        <Button className="p-4 border border-black-06 rounded-md">
          <FavThin />
        </Button>
      </div>
    </div>
  );
};

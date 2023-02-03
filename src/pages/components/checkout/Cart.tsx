import Section from '@layouts/Section';
import {
  decreaseQuantity,
  ICartProduct,
  increaseQuantity,
  removeFromCart,
} from '@store/cart/CartSlice';
import { useAppDispatch, useAppSelector } from '@store/store';
import classNames from 'classnames';
import Button from 'components/common/Button';
import { FunctionComponent } from 'react';
import { GrClose } from 'react-icons/gr';

export default function Cart() {
  const { products } = useAppSelector((store) => store.cart);

  return (
    <Section
      className={classNames('!p-0 min-h-[calc(100vh-76px)] flex flex-col', {
        ['justify-between']: products.length > 0,
        ['justify-center']: products.length <= 0,
      })}
    >
      <CartList cartItem={products} />
      {products.length > 0 ? (
        <CartDescription />
      ) : (
        <p className="text-center">Continue Shopping</p>
      )}
    </Section>
  );
}

interface ICartItem {
  id: string;
  cover: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
}
const CartItem: FunctionComponent<ICartItem> = ({
  id,
  cover,
  name,
  category,
  quantity,
  price,
}) => {
  const dispatch = useAppDispatch();

  return (
    <figure className="flex gap-4">
      <img
        className="w-[125px] h-[125px] object-cover"
        src={cover}
        alt={name}
      />

      <figcaption className="flex-1 flex items-center justify-between">
        <div className="flex flex-col justify-between h-full">
          <p>{category}</p>
          <h3>{name}</h3>
          <div
            className="flex items-center divide-x divide-black-01
            border border-black-01 rounded-lg"
          >
            <Button
              className="py-1 w-[40px] flex items-center justify-center"
              onClick={() => dispatch(decreaseQuantity(id))}
            >
              -
            </Button>
            <p className="py-1 w-[50px] flex items-center justify-center">
              {quantity}
            </p>
            <Button
              className="py-1 w-[40px] flex items-center justify-center"
              onClick={() => dispatch(increaseQuantity(id))}
            >
              +
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between h-full">
          <Button
            className="p-3 border border-black-01 rounded-full"
            onClick={() => dispatch(removeFromCart(id))}
          >
            <GrClose />
          </Button>
          <h5>{`$${price.toFixed(2)}`}</h5>
        </div>
      </figcaption>
    </figure>
  );
};

interface ICartList {
  cartItem: ICartProduct[];
}
const CartList: FunctionComponent<ICartList> = ({ cartItem }) => {
  return (
    <ul className="flex flex-col gap-y-12">
      {cartItem.map((product) => (
        <li key={product.id}>
          <CartItem {...product} />
        </li>
      ))}
    </ul>
  );
};

interface ICartDescription {}
const CartDescription: FunctionComponent<ICartDescription> = () => {
  const { totalPrice, totalQuantity, shipping } = useAppSelector(
    (store) => store.cart
  );
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col justify-center space-y-5">
        <p className="flex items-center justify-between">
          Product in cart&nbsp;:<span>{totalQuantity} items</span>
        </p>
        <p className="flex items-center justify-between">
          Shipping&nbsp;:<span>${shipping.toFixed(2)}</span>
        </p>
        <p
          className="flex items-center justify-between pb-5 
          border-b border-black-01 border-dashed"
        >
          Total&nbsp;:<span>${totalPrice.toFixed(2)}</span>
        </p>

        <p className="flex items-center justify-between">
          Grand Total&nbsp;:<span>${(shipping + totalPrice).toFixed(2)}</span>
        </p>
      </div>
      <Button as="link" to={'shipping'}>
        Proceed to checkout
      </Button>
      <Button as="link" to={'../'}>
        Continue shopping
      </Button>
    </div>
  );
};

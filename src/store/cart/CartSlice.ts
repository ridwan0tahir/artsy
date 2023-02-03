import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@utils/constants/product';

export interface ICartProduct extends IProduct {
  quantity: number;
}

interface ICartSlice {
  products: ICartProduct[];
  totalPrice: number;
  totalQuantity: number;
  shipping: number;
}

const initialState: ICartSlice = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
  shipping: 2.5,
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const found = state.products.find(
        (prod) => prod.id === action.payload.id
      );
      if (!found) {
        const product = {
          ...action.payload,
          quantity: 1,
        };
        return { ...state, products: [...state.products, product] };
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const products = state.products.filter(
        (prod) => prod.id !== action.payload
      );
      return { ...state, products: products };
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const product = state.products.find((prod) => prod.id === action.payload);
      if (product) ++product.quantity;
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const product = state.products.find((prod) => prod.id === action.payload);
      if (product && product.quantity > 1) --product.quantity;
    },

    calculateTotal: (state) => {
      let totalPrice = 0;
      let totalQuantity = 0;

      state.products.forEach((prod) => {
        totalPrice += prod.price * prod.quantity;
        totalQuantity += prod.quantity;
      });

      return { ...state, totalPrice, totalQuantity };
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
} = CartSlice.actions;

export default CartSlice.reducer;

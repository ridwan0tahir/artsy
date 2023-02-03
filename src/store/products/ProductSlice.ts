import ProductData from '@data/products';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@utils/constants/product';

const OFFSET = 6;

interface IProductSlice {
  globalProducts: IProduct[];
  modifiedProducts: IProduct[];
  currentPosition: number;
}

const initialState: IProductSlice = {
  globalProducts: ProductData,
  modifiedProducts: ProductData,
  currentPosition: OFFSET,
};

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      return { ...state, modifiedProducts: action.payload };
    },

    updateCurrentPosition: (state) => {
      const { currentPosition, modifiedProducts } = state;
      if (currentPosition >= modifiedProducts.length) {
        return state;
      }

      return { ...state, currentPosition: currentPosition + OFFSET };
    },
  },
});

export const { setProducts, updateCurrentPosition } = ProductSlice.actions;

export default ProductSlice.reducer;

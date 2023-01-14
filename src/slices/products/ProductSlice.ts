import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductData from "data/ProductData";

const OFFSET = 6;

interface IProductSlice {
  globalProducts: typeof ProductData;
  modifiedProducts: typeof ProductData;
  currentPosition: number;
}

const initialState: IProductSlice = {
  globalProducts: ProductData,
  modifiedProducts: ProductData,
  currentPosition: OFFSET,
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<typeof ProductData>) => {
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

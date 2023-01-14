import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilterPrice {
  min: number;
  max: number;
}

interface IFilterState {
  categories: string[];
  artists: string[];
  price: IFilterPrice;
}

const initialState: IFilterState = {
  categories: [],
  artists: [],
  price: { min: 0, max: 50 },
};

export const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addToCategory: ({ categories }, action: PayloadAction<string>) => {
      categories.push(action.payload);
    },

    removeFromCategory: (state, action: PayloadAction<string>) => {
      const newCategories = state.categories.filter(
        (category) => category !== action.payload
      );
      return { ...state, categories: newCategories };
    },

    addToArtist: ({ artists }, action: PayloadAction<string>) => {
      artists.push(action.payload);
    },

    removeFromArtist: (state, action: PayloadAction<string>) => {
      const newArtists = state.artists.filter(
        (artist) => artist !== action.payload
      );
      return { ...state, artists: newArtists };
    },

    setPrice: (state, action: PayloadAction<IFilterPrice>) => {
      return { ...state, price: action.payload };
    },
  },
});

export const {
  addToCategory,
  removeFromCategory,
  addToArtist,
  removeFromArtist,
  setPrice,
} = FilterSlice.actions;

export default FilterSlice.reducer;

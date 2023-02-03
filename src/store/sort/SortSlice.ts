import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Sort {
  NONE,
  LOW,
  HIGH,
  DATE,
}

interface ISortSlice {
  sortBy: Sort;
}

const initialState: ISortSlice = {
  sortBy: Sort.NONE,
};

export const SortSlice = createSlice({
  name: "sort_modal",
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<Sort>) => {
      return { ...state, sortBy: action.payload };
    },
  },
});

export const { setSortBy } = SortSlice.actions;

export default SortSlice.reducer;

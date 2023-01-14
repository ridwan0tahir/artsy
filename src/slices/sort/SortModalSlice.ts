import { createSlice } from "@reduxjs/toolkit";

interface ISortModalSlice {
  isSortOpen: boolean;
}

const initialState: ISortModalSlice = {
  isSortOpen: false,
};

export const SortModalSlice = createSlice({
  name: "sort_modal",
  initialState,
  reducers: {
    openSortModal: (state) => {
      return { ...state, isSortOpen: true };
    },

    closeSortModal: (state) => {
      return { ...state, isSortOpen: false };
    },
  },
});

export const { openSortModal, closeSortModal } = SortModalSlice.actions;

export default SortModalSlice.reducer;

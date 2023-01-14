import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilterModalState {
  isFilterOpen: boolean;
}

const initialState: IFilterModalState = {
  isFilterOpen: false,
};

export const FilterModalSlice = createSlice({
  name: "filter_modal",
  initialState,
  reducers: {
    openFilterModal: (state) => {
      return { ...state, isFilterOpen: true };
    },

    closeFilterModal: (state) => {
      return { ...state, isFilterOpen: false };
    },
  },
});

export const { openFilterModal, closeFilterModal } = FilterModalSlice.actions;

export default FilterModalSlice.reducer;

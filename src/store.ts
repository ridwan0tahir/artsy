import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products/ProductSlice";
import filterReducer from "./slices/filter/FilterSlice";
import filterModalReducer from "./slices/filter/FilterModalSlice";
import sortReducer from "./slices/sort/SortSlice";
import sortModalReducer from "./slices/sort/SortModalSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    filter: filterReducer,
    filterModal: filterModalReducer,
    sort: sortReducer,
    sortModal: sortModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

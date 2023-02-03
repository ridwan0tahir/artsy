import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import productReducer from './products/ProductSlice';
import cartReducer from './cart/CartSlice';
import filterReducer from './filter/FilterSlice';
import filterModalReducer from './filter/FilterModalSlice';
import sortReducer from './sort/SortSlice';
import sortModalReducer from './sort/SortModalSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    filter: filterReducer,
    filterModal: filterModalReducer,
    sort: sortReducer,
    sortModal: sortModalReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

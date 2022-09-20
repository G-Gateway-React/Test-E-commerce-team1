import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import authReducer from "./auth";
import productReducer from "./product";
import categories from "./categories";
import BagItems from "./bag";

const store = configureStore({
  reducer: {
    auth: authReducer,
    productReducer,
    categories,
    BagItems,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

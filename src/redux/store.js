import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import priceSlice from "./slices/priceSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    price: priceSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import ImageReducer from "../features/ImageSearch/imageSlice";

export const store = configureStore({
  reducer: {
    ImageReducer,
  },
});

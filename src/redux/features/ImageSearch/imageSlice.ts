"use client";

import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  images: "",
};

export const imageSlice = createSlice({
  name: "Image",
  initialState,
  reducers: {
    add: (state, actions) => {
      state.images = actions.payload;
      console.log(state.images, "From the slice");
    },
  },
});

export const { add } = imageSlice.actions;

export default imageSlice.reducer;

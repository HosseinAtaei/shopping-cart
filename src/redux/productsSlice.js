import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.items.pop(action.payload);
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
  },
});

export const { addProduct, deleteProduct, increment, decrement } =
  productsSlice.actions;

export default productsSlice.reducer;

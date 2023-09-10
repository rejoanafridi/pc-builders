// productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    builderProduct: null,
    addedProducts: [], // Add an array to store added products
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.builderProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.builderProduct = null;
    },
    addProductToBuilder: (state, action) => {
      state.addedProducts.push(action.payload); // Add a product to the array
    },
  },
});

export const { setSelectedProduct, clearSelectedProduct, addProductToBuilder } =
  productSlice.actions;

export default productSlice.reducer;

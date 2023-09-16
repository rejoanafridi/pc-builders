// productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    builderProduct: null,
    addedProducts: [], // Add an array to store added products
    productCompare: {},
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
    addProductCompareFirst: (state, action) => {
      state.productCompare.selectFirstProduct = action.payload; // Add a product to the array
    },
    addProductCompareSecond: (state, action) => {
      state.productCompare.selectSecondProduct = action.payload; // Add a product to the array
    },
  },
});

export const {
  setSelectedProduct,
  clearSelectedProduct,
  addProductToBuilder,
  addProductCompareFirst,
  addProductCompareSecond,
} = productSlice.actions;

export default productSlice.reducer;

// productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    builderProduct: null,
    buildComponents: {},
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
      const { key, value } = action.payload;
      state.buildComponents[key] = value; // Add a product to the array
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

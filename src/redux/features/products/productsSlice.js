// productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    builderProduct: null,
    buildComponents: {},
    productCompare: {},
    productCart: [],
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

    addToProductCart: (state, action) => {
      const productToAdd = action.payload;
      console.log(productToAdd);
      const existingProduct = state.productCart.find(
        (product) => product.id === productToAdd.id,
      );

      if (existingProduct) {
        // If the product already exists in the cart, update its quantity
        existingProduct.quantity += productToAdd.quantity;
      } else {
        // If it's a new product, add it to the cart
        state.productCart.push(productToAdd);
      }
    },
  },
});

export const {
  setSelectedProduct,
  clearSelectedProduct,
  addProductToBuilder,
  addProductCompareFirst,
  addProductCompareSecond,
  addToProductCart,
} = productSlice.actions;

export default productSlice.reducer;

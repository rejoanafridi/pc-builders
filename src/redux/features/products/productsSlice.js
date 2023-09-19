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
    addBuilderProductToCart: (state, action) => {
      console.log(action.payload);
      const keys = Object.keys(action.payload);
      Object.values(action.payload).map((components) => {
        const existingProduct = state.productCart.find(
          (product) => product.id === components.uuid,
        );
        console.log(existingProduct);
        if (existingProduct) {
          // If the product already exists in the cart, update its quantity
          existingProduct.quantity += components.quantity;
        } else {
          // If it's a new product, add it to the cart

          state.productCart.push({
            id: components.uuid,
            productImage: components.imageUrl,
            productName: components.name,
            productModel: components?.additionalDetails?.keyFeatures[1],
            quantity: 1,
            unitPrice: components?.additionalDetails?.regularPrice,
          });
        }
      });
    },
    addProductCompareFirst: (state, action) => {
      state.productCompare.selectFirstProduct = action.payload; // Add a product to the array
    },
    addProductCompareSecond: (state, action) => {
      state.productCompare.selectSecondProduct = action.payload; // Add a product to the array
    },

    addToProductCart: (state, action) => {
      const productToAdd = action.payload;

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

    removeCartItem: (state, action) => {
      state.productCart = state.productCart.filter(
        (product) => product.id !== action.payload,
      );
    },
    removeBuildComponents: (state, action) => {
      delete state.buildComponents[action.payload];
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
  removeCartItem,
  removeBuildComponents,
  addBuilderProductToCart,
} = productSlice.actions;

export default productSlice.reducer;

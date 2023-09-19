import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  type: 'all',
  show: 10,
  availability: {
    inStock: false,
    preOrder: false,
    outOfStock: false,
  },
  price: {
    from: '',
    to: '',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterType: (state, action) => {
      state.type = action.payload;
    },
    setShowType: (state, action) => {
      state.show = action.payload;
    },
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
    toggleAvailability: (state, action) => {
      const { option } = action.payload;
      state.availability[option] = !state.availability[option];
    },
    resetAvailability: (state) => {
      state.inStock = false;
      state.preOrder = false;
      state.outOfStock = false;
    },
    setPriceFilter: (state, action) => {
      const { from, to } = action.payload;
      state.price.from = from;
      state.price.to = to;
    },
  },
});

export default filterSlice.reducer;

export const {
  changeSearch,
  setFilterType,
  setShowType,
  toggleAvailability,
  resetAvailability,
  setPriceFilter,
} = filterSlice.actions;

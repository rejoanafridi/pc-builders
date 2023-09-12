import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  type: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterType: (state, action) => {
      state.type = action.payload;
    },
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const { changeSearch, filterType } = filterSlice.actions;

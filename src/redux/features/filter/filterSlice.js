import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  type: 'all',
  show: 10,
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
  },
});

export default filterSlice.reducer;

export const { changeSearch, setFilterType, setShowType } = filterSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    categories: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((product) => product.id !== action.payload.id);
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter((category) => category.id !== action.payload.id);
    },
  },
});

export const { addProduct, removeProduct, addCategory, removeCategory } = productSlice.actions;
export default productSlice.reducer;

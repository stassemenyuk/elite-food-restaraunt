import { createSlice } from '@reduxjs/toolkit';
import request from '../request.js';

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    products: [],
    product: {
      data: {},
      similarProducts: [],
    },
    cart: [],
  },
  reducers: {
    getAllElements: (state) => {
      state.products = request('/products');
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    getProductInfo: (state, action) => {
      const el = request(`/products/${action.payload}`);
      const { name, pictures, price, rating, category } = el;
      state.product.data = {
        name,
        price,
        rating,
        picture: pictures[0],
      };
      state.product.similarProducts = request(`/products?category=${category}`);
    },
    getCategoryProducts: (state, action) => {
      state.products = request(`/products?category=${action.payload}`);
    },
  },
});

export const { getAllElements, addToCart, getCategoryProducts, getProductInfo } =
  cardsSlice.actions;

export default cardsSlice.reducer;

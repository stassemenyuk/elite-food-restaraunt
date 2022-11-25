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
      let isFirstTime = true;
      state.cart.forEach((i) => {
        if (i.id === action.payload.id) {
          i.amount += action.payload.amount;
          i.total += action.payload.amount * i.price;
          isFirstTime = false;
        }
      });
      if (isFirstTime) {
        const elem = request(`/products/${action.payload.id}`);
        const cartElem = {
          id: elem.id,
          price: elem.price,
          name: elem.name,
          currency: elem.currency,
          picture: elem.pictures[0],
          amount: action.payload.amount,
          total: action.payload.amount * elem.price,
        };
        state.cart = [...state.cart, cartElem];
      }
    },
    getProductInfo: (state, action) => {
      const el = request(`/products/${action.payload}`);
      const { name, pictures, price, rating, category, description, currency, reviewsCount } = el;
      state.product.data = {
        name,
        price,
        description,
        rating,
        category,
        currency,
        reviewsCount,
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

import { combineReducers } from 'redux';

import cartReducer from '../pages/cart/cartReducer';
import productReducer from '../pages/product/productReducer';
import productsReducer from '../pages/products/productsReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  products: productsReducer,
});

export default rootReducer;
// import { createSlice } from '@reduxjs/toolkit';
// import request from '../request.js';

// export const cardsSlice = createSlice({
//   name: 'cards',
//   initialState: {
//     products: [],
//     product: {
//       data: {},
//       similarProducts: [],
//     },
//     cart: [],
//   },
//   reducers: {
//     getAllElements: (state) => {
//       state.products = request('/products');
//     },
//     addToCart: (state, action) => {
//       let isFirstTime = true;
//       state.cart.forEach((i) => {
//         if (i.id === action.payload.id) {
//           i.amount += action.payload.amount;
//           i.total += action.payload.amount * i.price;
//           isFirstTime = false;
//         }
//       });
//       if (isFirstTime) {
//         const elem = request(`/products/${action.payload.id}`);
//         const cartElem = {
//           id: elem.id,
//           price: elem.price,
//           name: elem.name,
//           currency: elem.currency,
//           picture: elem.pictures[0],
//           amount: action.payload.amount,
//           total: action.payload.amount * elem.price,
//         };
//         state.cart = [...state.cart, cartElem];
//       }
//     },
//     deleteFromCart: (state, action) => {
//       let searchId;
//       state.cart.forEach((item, id) => {
//         if (item.id === action.payload) searchId = id;
//       });
//       state.cart.splice(searchId, 1);
//     },
//     getProductInfo: (state, action) => {
//       const el = request(`/products/${action.payload}`);
//       const { name, pictures, price, rating, category, description, currency, reviewsCount } = el;
//       state.product.data = {
//         name,
//         price,
//         description,
//         rating,
//         category,
//         currency,
//         reviewsCount,
//         picture: pictures[0],
//       };
//       state.product.similarProducts = getSimilarProducts(action.payload, category);
//     },
//     getCategoryProducts: (state, action) => {
//       state.products = request(`/products?category=${action.payload}`);
//     },
//   },
// });

// function getSimilarProducts(index, category) {
//   const allProductsByCategory = request(`/products?category=${category}`);
//   let searchId;
//   allProductsByCategory.forEach((i, id) => {
//     if (i.id === index) {
//       searchId = id;
//     }
//   });
//   allProductsByCategory.splice(searchId, 1);
//   return allProductsByCategory;
// }

// export const { getAllElements, addToCart, getCategoryProducts, getProductInfo, deleteFromCart } =
//   cardsSlice.actions;

// export default cardsSlice.reducer;

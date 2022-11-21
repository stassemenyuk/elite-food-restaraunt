import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';

import Product from '../../pages/product/Product';
import Products from '../../pages/products/Products';
import Cart from '../../pages/cart/Cart';
import Checkout from '../../pages/checkout/Checkout';
import Header from '../header/Header';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/products" exact element={<Products />} />
          <Route path="/products/:id" exact element={<Product />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/checkout" exact element={<Checkout />} />
          <Route path="*" element={<Navigate to="/products" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

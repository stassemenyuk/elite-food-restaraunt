import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Cart.css';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cards.cart);
  return (
    <div className="cart-page page">
      <div className="cart-container container">
        <table className="cart-products-block">
          <thead>
            <tr>
              <th className="cart-products-header">Product</th>
              <th className="cart-products-header">Price</th>
              <th className="cart-products-header">Quantity</th>
              <th className="cart-products-header">Total</th>
              <th className="cart-products-header">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((i) => {
              return (
                <CartElement
                  key={i.id}
                  img={i.picture}
                  price={i.price}
                  currency={i.currency}
                  amount={i.amount}
                  total={i.total}
                  name={i.name}
                  id={i.id}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      {console.log(cart)}
    </div>
  );
}

function CartElement({ img, price, currency, amount, id, total, name }) {
  return (
    <>
      <tr className="cart-element">
        <td className="cart-element__product">
          <img src={img} alt="product" width={'100px'} height={'100px'} /> {name}
        </td>
        <td className="cart-element__price">
          {price} {currency}
        </td>
        <td className="cart-element__quantity">{amount}</td>
        <td className="cart-element__total">{total}</td>
        <td className="cart-element__remove">X</td>
      </tr>
    </>
  );
}

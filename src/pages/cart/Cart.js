import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartElement from './CartElement';
import { getAllElements } from '../products/productsActions';

import styles from './Cart.module.css';

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllElements);
  }, [dispatch]);

  return (
    <div className="page">
      <div className="container">
        <table className={styles.block}>
          <thead>
            <tr>
              <th className={styles.header}>Product</th>
              <th className={styles.header}>Price</th>
              <th className={styles.header}>Quantity</th>
              <th className={styles.header}>Total</th>
              <th className={styles.header}>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((i) => {
              const product = products.find((element) => {
                return element.id === i.id;
              });
              return (
                <CartElement
                  key={product.id}
                  img={product.pictures[0]}
                  price={product.price}
                  currency={product.currency}
                  amount={i.amount}
                  total={product.price * i.amount}
                  name={product.name}
                  id={product.id}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

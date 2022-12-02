import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteFromCart } from './cartActions';

import styles from './Cart.module.css';

export default function CartElement({ img, price, currency, amount, id, total, name, rating }) {
  const dispatch = useDispatch();

  function deleteElem(id) {
    dispatch(deleteFromCart(id));
  }

  return (
    <>
      <tr className={styles.element}>
        <td className={styles.product}>
          <div className={styles.picture} style={{ backgroundImage: `url(${img})` }}></div>
          {name}
        </td>
        <td className={styles.price}>
          {price} {currency}
        </td>
        <td className={styles.quantity}>
          <div className={styles.quantity__block}>
            <span>-</span>
            <span>{amount}</span>
            <span>+</span>
          </div>
        </td>
        <td className={styles.total}>
          {total} {currency}
        </td>
        <td className={styles.remove} onClick={() => deleteElem(id)}>
          <span>X</span>
        </td>
      </tr>
    </>
  );
}

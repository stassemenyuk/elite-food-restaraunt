import React from 'react';
import { Link } from 'react-router-dom';

import styles from './FoodCard.module.css';

export default function FoodCard({ name, price, img, id, currency }) {
  return (
    <Link to={`/products/${id}`}>
      <div className={styles.image} style={{ backgroundImage: `url(${img})` }}></div>

      <div className={styles.name}>{name}</div>
      <div className={styles.price}>
        {currency}
        {price}
      </div>
    </Link>
  );
}

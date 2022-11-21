import React from 'react';
import { Link } from 'react-router-dom';

import './FoodCard.css';

export default function FoodCard({ name, price, img, id, currency }) {
  return (
    <Link className="food-card" to={`/products/${id}`}>
      <div className="food-image-wrapper" style={{ backgroundImage: `url(${img})` }}></div>

      <div className="food-name">{name}</div>
      <div className="food-price">
        {currency}
        {price}
      </div>
    </Link>
  );
}

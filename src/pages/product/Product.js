import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getProductInfo } from '../../reducer/reducer';

export default function Product() {
  const { id } = useParams();
  const product = useSelector((state) => state.cards.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductInfo(id));
  }, []);

  return (
    <div className="product-page page">
      <div className="product-info">
        {product.data.name} <br />
        {product.data.price} {product.data.currency}
        {console.log(product.similarProducts)}
      </div>
    </div>
  );
}

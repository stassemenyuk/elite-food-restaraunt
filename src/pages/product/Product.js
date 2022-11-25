import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getProductInfo, addToCart } from '../../reducer/reducer';
import FoodCard from '../../components/food-card/FoodCard';

import './Product.css';
import toteImg from '../../assets/svg/Tote.svg';

export default function Product() {
  const { id } = useParams();
  const product = useSelector((state) => state.cards.product);
  const dispatch = useDispatch();

  const [amountOfProduct, setAmount] = useState(1);

  useEffect(() => {
    dispatch(getProductInfo(id));
  }, [dispatch, id]);

  const { picture, name, description, price, currency, reviewsCount, rating, category } =
    product.data;

  function addElementToCart() {
    dispatch(
      addToCart({
        id: +id,
        amount: amountOfProduct,
      }),
    );
  }

  return (
    <div className="product-page page">
      <div className="product-container container">
        <div className="product-info">
          <div
            className="product-info__img-block product-info-block"
            style={{ backgroundImage: `url(${picture})` }}></div>
          <div className="product-info__text-block product-info-block">
            <div className="product-info__name">{name}</div>
            <div className="product-info__description">{description}</div>
            <div className="product-info__price">
              {price} {currency}
            </div>
            <div className="product-info__rating">
              <span></span>
              <span>{rating} Rating</span>
              <span>{reviewsCount} Reviews</span>
            </div>
            <div className="product-info__add-to-cart">
              <div className="amount-block">
                <div
                  className="amount-button"
                  onClick={() => {
                    if (amountOfProduct !== 1) {
                      setAmount(amountOfProduct - 1);
                    }
                  }}>
                  -
                </div>
                <div className="amount-output">{amountOfProduct}</div>
                <div
                  className="amount-button"
                  onClick={() => {
                    setAmount(amountOfProduct + 1);
                  }}>
                  +
                </div>
              </div>
              <button className="add-to-cart-button" onClick={() => addElementToCart()}>
                <img src={toteImg} alt="Tote" width={'20px'} height={'20px'} /> Add to cart
              </button>
            </div>
            <div className="product-info__category">
              Category: <span>{category}</span>
            </div>
          </div>
        </div>
        <div className="similar-block">
          <div className="similar-products__title">Similar Products</div>
          <div className="similar-products__wrapper">
            {product.similarProducts.map(({ name, price, pictures, id, currency }) => {
              return (
                <FoodCard
                  key={id}
                  name={name}
                  price={price}
                  img={pictures[0]}
                  id={id}
                  currency={currency}
                />
              );
            })}
            {console.log(product.similarProducts)}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getProductInfo, getSimilarProduct } from './productActions';
import { addToCart } from '../cart/cartActions';
import FoodCard from '../../components/food-card/FoodCard';

import toteImg from '../../assets/svg/Tote.svg';

import styles from './Product.module.css';

export default function Product() {
  const { id } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [amountOfProduct, setAmount] = useState(1);

  useEffect(() => {
    dispatch(getProductInfo(+id));
    dispatch(getSimilarProduct(+id));
  }, [dispatch, id]);

  const [disabled, setDisabled] = useState(false);

  const { picture, name, description, price, currency, reviewsCount, rating, category } =
    product.data;

  function addElementToCart() {
    setDisabled(true);
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
        <div className={styles.info}>
          <div className={styles.img_block} style={{ backgroundImage: `url(${picture})` }}></div>
          <div className={styles.text_block}>
            <div className={styles.name}>{name}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.price}>
              {price} {currency}
            </div>
            <div className={styles.rating}>
              <span></span>
              <span>{rating} Rating</span>
              <span>{reviewsCount} Reviews</span>
            </div>
            <div className={styles.add_to_cart}>
              <div className={styles.amount_block}>
                <button
                  disabled={disabled}
                  className={styles.amount_button}
                  onClick={() => {
                    if (amountOfProduct !== 1) {
                      setAmount(amountOfProduct - 1);
                    }
                  }}>
                  -
                </button>
                <div className="amount-output">{amountOfProduct}</div>
                <button
                  disabled={disabled}
                  className={styles.amount_button}
                  onClick={() => {
                    setAmount(amountOfProduct + 1);
                  }}>
                  +
                </button>
              </div>
              <button
                disabled={disabled}
                className={styles.add_to_cart_button}
                onClick={() => addElementToCart()}>
                <img src={toteImg} alt="Tote" width={'20px'} height={'20px'} /> Add to cart
              </button>
            </div>
            <div className={styles.category}>
              Category: <span>{category}</span>
            </div>
          </div>
        </div>
        <div className={styles.similar_block}>
          <div className={styles.similar_products__title}>Similar Products</div>
          <div className={styles.similar_products__wrapper}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

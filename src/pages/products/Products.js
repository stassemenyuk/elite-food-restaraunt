import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllElements, getByCategory } from './productsActions';

import FoodCard from '../../components/food-card/FoodCard';

import styles from './Products.module.css';

import searchIcon from '../../assets/svg/MagnifyingGlass.svg';

export default function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  useEffect(() => {
    dispatch(getAllElements);
  }, [dispatch]);

  return (
    <div className="page">
      <div className="container">
        <div className={styles.tools}>
          <div>Sort by:</div>
          <div>Show:</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.cards}>
            {products
              .filter((el) => el.name.includes(input))
              .map((i) => {
                return (
                  <FoodCard
                    name={i.name}
                    price={i.price}
                    img={i.pictures[0]}
                    key={i.id}
                    id={i.id}
                    currency={i.currency}
                  />
                );
              })}
          </div>
          <div className={styles.filters}>
            <div className={styles.input_wrapper}>
              <input
                type="text"
                placeholder="Search Product"
                onChange={(e) => setInput(e.target.value)}
              />
              <div className={styles.search_icon}>
                <img src={searchIcon} alt="magnifying glass" width={'20px'} height="20px" />
              </div>
            </div>
            <div>
              <h3 className={styles.filter_title}>Category</h3>
              <CategoryForm />
            </div>
            <div className="filter-by-price"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryForm() {
  const dispatch = useDispatch();
  return (
    <form
      action=""
      className={styles.form}
      onChange={(e) => {
        dispatch(getByCategory(e.target.id));
      }}>
      <div className={styles.form__item}>
        <input type="radio" name="category" id="Pizza" />
        <label htmlFor="Pizza">Pizza</label>
      </div>
      <div className={styles.form__item}>
        <input type="radio" name="category" id="Sandwich" />
        <label htmlFor="Sandwich">Sandwich</label>
      </div>
      <div className={styles.form__item}>
        <input type="radio" name="category" id="Burger" />
        <label htmlFor="Burger">Burger</label>
      </div>
      <div className={styles.form__item}>
        <input type="radio" name="category" id="Soup" />
        <label htmlFor="Soup">Soup</label>
      </div>
      <div className={styles.form__item}>
        <input type="radio" name="category" id="All" />
        <label htmlFor="All">All</label>
      </div>
    </form>
  );
}

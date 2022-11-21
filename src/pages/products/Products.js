import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllElements, getCategoryProducts } from '../../reducer/reducer';

import FoodCard from '../../components/food-card/FoodCard';

import './Products.css';

export default function Products() {
  const products = useSelector((state) => state.cards.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllElements());
  }, []);

  return (
    <div className="products-page page">
      <div className="products-container container">
        <div className="products-tools">
          <div className="tools__sort-by">Sort by:</div>
          <div className="tools__show">Show:</div>
        </div>
        <div className="products-wrapper">
          <div className="products-cards">
            {products.map((i) => {
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
          <div className="products-filters">
            <div className="search-panel"></div>
            <div className="category-panel">
              <h3 className="filter-title">Category</h3>
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
      className="category-form"
      onChange={(e) => {
        dispatch(getCategoryProducts(e.target.id));
      }}>
      <div className="category-form__item">
        <input type="radio" name="category" id="Pizza" />
        <label htmlFor="Pizza">Pizza</label>
      </div>
      <div className="category-form__item">
        <input type="radio" name="category" id="Sandwich" />
        <label htmlFor="Sandwich">Sandwich</label>
      </div>
      <div className="category-form__item">
        <input type="radio" name="category" id="Burger" />
        <label htmlFor="Burger">Burger</label>
      </div>
      <div className="category-form__item">
        <input type="radio" name="category" id="Soup" />
        <label htmlFor="Soup">Soup</label>
      </div>
    </form>
  );
}

import React from 'react';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';
import Product from './Product/Product';
import Categories from '../Categories/Categories';
import classes from './Products.module.css';

const Products = () => {
  const { products, category, loading } = useSelector((state) => state.items);

  if (loading) return <Loader />;
  return (
    <div className={classes.products_container}>
      <div className={classes.box_one}>
        <span>Categories: </span>
        <span style={{ color: '#d1d1d1' }}>{category ? category : null}</span>
        <Categories />
      </div>
      <section className={classes.products}>
        <div className={classes.product__center}>
          {category && products.length > 0 ? (
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))
          ) : products.length > 0 ? (
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))
          ) : (
            <p className={classes.category}>
              No product in {category} category
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;

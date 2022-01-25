import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product/Product';

import classes from './HomeProducts.module.css';
const HomeProducts = () => {
  const products = useSelector((state) => state.items.products);
  return (
    <>
      <h1 className={classes.head}>top products</h1>
      <div className={classes.homeproducts_container}>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default HomeProducts;

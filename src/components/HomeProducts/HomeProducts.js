import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product/Product';

import classes from './HomeProducts.module.css';
import Loader from '../Loader/Loader';
const HomeProducts = () => {
  const { products, loading } = useSelector((state) => state.items);
  return (
    <>
      <h1 className={classes.head}>top products</h1>

      <div className={classes.homeproducts_container}>
        {loading ? (
          <Loader />
        ) : (
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))
        )}
      </div>
    </>
  );
};

export default HomeProducts;

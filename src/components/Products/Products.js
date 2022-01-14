import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product/Product';
import classes from './Products.module.css';

const Products = () => {
  const products = useSelector((state) => state.items.products);

  return (
    <section className={classes.products}>
      <div className={classes.product__center}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;

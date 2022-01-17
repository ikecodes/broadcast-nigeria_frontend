import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product/Product';
import Categories from '../../components/Welcome/Categories/Categories';
import classes from './Products.module.css';

const Products = () => {
  const products = useSelector((state) => state.items.products);

  return (
    <div className={classes.products_container}>
      <div className={classes.box_one}>
        <Categories />
      </div>
      <section className={classes.products}>
        <div className={classes.product__center}>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;

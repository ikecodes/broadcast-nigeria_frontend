import React from 'react';
import { useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import Product from './Product/Product';
import classes from './Products.module.css';

const Products = () => {
  const products = useSelector((state) => state.items.products);

  return (
    <section className={classes.products}>
      {/* <div className={classes.dropdown}>
        <Dropdown>
          <Dropdown.Toggle variant='light' id='dropdown-basic'>
            Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div> */}

      <div className={classes.product__center}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;

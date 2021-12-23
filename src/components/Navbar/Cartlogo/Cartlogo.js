import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Cartlogo.module.css';

const Cartlogo = () => {
  const CartItems = useSelector((state) => state.items.cart);
  return (
    <div className={classes.container}>
      <i className={`bi bi-cart ${classes.cart__icon}`}></i>
      <div className={classes.cart__number}>
        <span>{CartItems.length}</span>
      </div>
    </div>
  );
};

export default Cartlogo;

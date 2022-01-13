import React from 'react';
import { useSelector } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa';
import classes from './Cartlogo.module.css';

const Cartlogo = () => {
  const CartItems = useSelector((state) => state.items.cart);
  return (
    <div className={classes.container}>
      <FaCartPlus size={20} color='#fcb700' />
      <div className={classes.cart__number}>
        <span>{CartItems.length}</span>
      </div>
    </div>
  );
};

export default Cartlogo;

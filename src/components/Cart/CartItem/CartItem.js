import React from 'react';
import { useDispatch } from 'react-redux';
import { FaArrowUp, FaArrowDown, FaTrash } from 'react-icons/fa';
import { increaseProduct, decreaseProduct } from '../../../actions/items';
import classes from './CartItem.module.css';

const CartItem = ({ id, name, price, image, number }) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.cart__item}>
      <div className={classes.cart__image__wrapper}>
        <img src={image} alt='Cart' className={classes.cart__image} />
      </div>
      <div className={classes.cart__content}>
        <h4>{name}</h4>
        <h5>${price}</h5>
      </div>
      <div className={classes.cart__quantity}>
        <div onClick={() => dispatch(increaseProduct(id, price))}>
          <FaArrowUp size={15} />
        </div>
        <h4>{number}</h4>
        <div onClick={() => dispatch(decreaseProduct(id, price))}>
          <FaArrowDown size={15} />
        </div>
      </div>
      <div className={classes.trash}>
        <FaTrash />
      </div>
    </div>
  );
};

export default CartItem;

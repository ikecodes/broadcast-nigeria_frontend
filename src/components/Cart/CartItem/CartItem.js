import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseProduct, decreaseProduct } from '../../../actions/items';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import classes from './CartItem.module.css';

const arrowUp = <FontAwesomeIcon icon={faChevronUp} />;
const arrowDown = <FontAwesomeIcon icon={faChevronDown} />;
const trashIcon = <FontAwesomeIcon icon={faTrash} color='#ff7f7f' />;

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
        <div onClick={() => dispatch(increaseProduct(id, price))}>{arrowUp}</div>
        <h4>{number}</h4>
        <div onClick={() => dispatch(decreaseProduct(id, price))}>{arrowDown}</div>
      </div>
      <div className={classes.trash}>{trashIcon}</div>
    </div>
  );
};

export default CartItem;

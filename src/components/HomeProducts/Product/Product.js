import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classes from './Product.module.css';
import { addToCart } from '../../../actions/items';

const Product = ({ product: { image, name, price, id } }) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.product}>
      <div className={classes.image__container}>
        <img src={image} alt='kfk' className={classes.product__image} />
      </div>
      <div className={classes.product__footer}>
        <Link to='/productDetails'>
          <h1 style={{ color: '#000' }}>{name}</h1>
        </Link>
        <div className={classes.bottom}>
          <div>
            <button
              className={classes.btn}
              onClick={() => dispatch(addToCart(id))}
            >
              Add to Cart
            </button>
          </div>
          <div className={classes.price}>${price}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;

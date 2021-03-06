import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createCart } from '../../../actions/cart';
import classes from './Product.module.css';

const Product = ({ product: { photo, name, price, _id, category } }) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.product}>
      <div className={classes.image__container}>
        <img src={photo} alt='kfk' className={classes.product__image} />
      </div>
      <div className={classes.product__footer}>
        <Link to={`/productDetails?id=${_id}`}>
          <h1 style={{ color: '#000' }}>{name}</h1>
        </Link>
        <p className={classes.category}>{category}</p>
        <div className={classes.bottom}>
          <div>
            <button
              className={classes.btn}
              onClick={() => dispatch(createCart({ prodId: _id }))}
            >
              Add to Cart
            </button>
          </div>
          <div className={classes.price}>₦{price}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;

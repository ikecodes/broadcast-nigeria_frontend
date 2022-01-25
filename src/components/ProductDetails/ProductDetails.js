import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Categories from '../Categories/Categories';
import classes from './ProductDetails.module.css';
const ProductDetails = () => {
  const location = useLocation();
  const id = location.search.split('=')[1];

  const product = useSelector((state) =>
    state.items.products.find((item) => item._id === id)
  );
  return (
    <div className={classes.productDetails_container}>
      <div className={classes.box_one}>
        <Categories />
      </div>
      <div>
        <div className={classes.box_two}>
          <img
            src={product?.photo}
            alt='Product'
            className={classes.productDetails_image}
          />
          <div className={classes.details_box}>
            <h2>{product?.name}</h2>
            <h1>N{product?.price}</h1>
            {/* <div className={classes.quantity_box}>
              <h4>quantity</h4>
              <input
                type='number'
                name='quantity'
                value=''
                className={classes.quantity}
              />
            </div> */}
            <button className={classes.btn}>Add to cart</button>
          </div>
        </div>
        <div className={classes.description}>
          <h1>Description</h1>
          <p>{product?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

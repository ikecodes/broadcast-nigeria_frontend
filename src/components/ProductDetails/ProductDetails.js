import React from 'react';
import ProductPhoto from '../../assets/product_photo.jpg';
import Categories from '../Welcome/Categories/Categories';
import classes from './ProductDetails.module.css';
const ProductDetails = () => {
  return (
    <div className={classes.productDetails_container}>
      <div className={classes.box_one}>
        <Categories />
      </div>
      <div>
        <div className={classes.box_two}>
          <img
            src={ProductPhoto}
            alt='Product'
            className={classes.productDetails_image}
          />
          <div className={classes.details_box}>
            <h2>Blackmagic Web Presenter HD</h2>
            <h1>N14,000</h1>
            <div className={classes.quantity_box}>
              <h4>quantity</h4>
              <input
                type='number'
                name='quantity'
                value={3}
                className={classes.quantity}
              />
            </div>
            <button className={classes.btn}>Add to cart</button>
          </div>
        </div>
        <div className={classes.description}>
          <h1>Description</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, fugiat
            distinctio. Qui, hic amet error libero est in, veritatis pariatur
            praesentium beatae, modi magnam atque dolore id sapiente accusamus
            quam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

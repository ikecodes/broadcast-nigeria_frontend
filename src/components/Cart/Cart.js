import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from './CartItem/CartItem';
import classes from './Cart.module.css';

const Cart = () => {
  const CartItems = useSelector((state) => state.cart.carts);
  const totalPrice = CartItems.reduce((acc, cur) => {
    acc = acc + cur.product.price * cur.quantity;
    return acc;
  }, 0);

  const EmptyCart = () => {
    return (
      <h4>
        Your Cart is currently empty, go to <Link to='/shop'>shop</Link> to add
        product.
      </h4>
    );
  };
  return (
    <section className={classes.products}>
      <h1 className={classes.cart__header}>Your Cart</h1>
      <div className={classes.cart__wrapper}>
        <div className={classes.cart}>
          {CartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            CartItems.map((item) => (
              <CartItem
                key={item.product._id}
                cartId={item._id}
                id={item.product._id}
                name={item.product.name}
                photo={item.product.photo}
                number={item.quantity}
                price={item.product.price}
              />
            ))
          )}
        </div>
      </div>
      <div className={classes.footer}>
        <h4>TOTAL:₦{totalPrice}</h4>
        <div>
          <button>checkout</button>
        </div>
      </div>
    </section>
  );
};
export default Cart;

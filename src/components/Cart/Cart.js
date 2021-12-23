import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, getTotalPrice } from '../../actions/items';
import CartItem from './CartItem/CartItem';
import classes from './Cart.module.css';

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalPrice());
  }, []);
  const CartItems = useSelector((state) => state.items.cart);
  const totalPrice = useSelector((state) => state.items.totalPrice);

  const emptyCart = <h1>Your Cart is currently empty</h1>;
  return (
    <section className={classes.products}>
      <h1 className={classes.cart__header}>Your Cart</h1>
      <div className={classes.cart__wrapper}>
        <div className={classes.cart}>
          {CartItems.map((item) => (
            <CartItem key={item.id} id={item.id} name={item.name} image={item.image} number={item.number} price={item.price} />
          ))}
        </div>
      </div>
      <div className={classes.footer}>
        <h4>TOTAL:${totalPrice}</h4>
        <div>
          <button onClick={() => dispatch(clearCart())}>clear cart</button>
          <button>checkout</button>
        </div>
      </div>
    </section>
  );
};
export default Cart;

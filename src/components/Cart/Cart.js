import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, getTotalPrice } from '../../actions/items';
import CartItem from './CartItem/CartItem';
import classes from './Cart.module.css';

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalPrice());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const CartItems = useSelector((state) => state.items.cart);
  const totalPrice = useSelector((state) => state.items.totalPrice);

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
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                number={item.number}
                price={item.price}
              />
            ))
          )}
        </div>
      </div>
      <div className={classes.footer}>
        <h4>TOTAL:₦{totalPrice}</h4>
        <div>
          <button onClick={() => dispatch(clearCart())}>clear cart</button>
          <button>checkout</button>
        </div>
      </div>
    </section>
  );
};
export default Cart;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import CartItem from './CartItem/CartItem';
import classes from './Cart.module.css';

const Cart = () => {
  const [checkoutmode, setCheckoutmode] = useState(false);
  const CartItems = useSelector((state) => state.cart.carts);
  const user = useSelector((state) => state.auth.user);
  const totalPrice = CartItems.reduce((acc, cur) => {
    acc = acc + cur.product.price * cur.quantity;
    return acc;
  }, 0);

  const config = {
    public_key: 'FLWPUBK_TEST-cc295b6365f505f510da6be586b28618-X',
    tx_ref: Date.now(),
    amount: totalPrice,
    currency: 'NGN',
    payment_options: 'card',
    customer: {
      email: 'ikecodes@gmail.com',
      phonenumber: user?.phone,
      name: user?.name,
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };
  const handleFlutterPayment = useFlutterwave(config);

  const EmptyCart = () => {
    return (
      <h4>
        Your Cart is currently empty, go to <Link to='/shop'>shop</Link> to add
        product.
      </h4>
    );
  };
  return (
    <div>
      {!checkoutmode && (
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
              <button onClick={() => setCheckoutmode((prev) => !prev)}>
                checkout
              </button>
            </div>
          </div>
        </section>
      )}

      {checkoutmode && (
        <div className='container'>
          <div className='row justify-content-center m-5'>
            <div className='col-lg-6'>
              <form className='px-5' style={{ fontSize: '2rem' }}>
                <input
                  type='text'
                  value={`${user?.firstname} ${user?.lastname}`}
                  disabled
                  style={{ fontSize: '1.5rem' }}
                  className='form-control'
                  readOnly
                />
                <input
                  type='email'
                  value={user?.email}
                  disabled
                  style={{ fontSize: '1.5rem' }}
                  className='form-control my-2'
                  readOnly
                />
                <input
                  type='tel'
                  value={user?.phone}
                  disabled
                  style={{ fontSize: '1.5rem' }}
                  className='form-control my-2'
                  readOnly
                />
                <textarea
                  className='form-control'
                  style={{ fontSize: '1.5rem' }}
                  cols='30'
                  rows='3'
                  value={user?.address}
                  readOnly
                ></textarea>
              </form>
            </div>
            <div className='col-lg-6'>
              <table className='table table-light'>
                <thead>
                  <tr>
                    <th scope='col'>Image</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Amount</th>
                    <th scope='col'>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {CartItems.map((item) => (
                    <tr key={item.product._id}>
                      <th>
                        <img
                          src={item.product.photo}
                          alt='product'
                          style={{ width: '5rem', height: '5rem' }}
                        />
                      </th>
                      <td>{item.product.name}</td>
                      <td>₦ {item.product.price}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td className='bg-dark text-white'>₦ {totalPrice}</td>
                  </tr>
                </tbody>
              </table>
              <button
                className={classes.btn}
                onClick={() => {
                  handleFlutterPayment({
                    callback: () => {
                      alert('Paymentment successful');
                      closePaymentModal(); // this will close the modal programmatically
                    },
                    onClose: () => {},
                  });
                }}
              >
                Proceed to payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;

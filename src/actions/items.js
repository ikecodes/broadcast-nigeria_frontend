import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  CLEAR_CART,
  GET_TOTAL_PRICE,
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
} from '../constants/actionTypes';
import { commerce } from '../lib/commerce';

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await commerce.products.list();

    const res = data.reduce((acc, cur) => {
      acc.push({
        id: cur.id,
        name: cur.name,
        price: cur.price.raw,
        image: cur.media.source,
        number: 1,
      });
      return acc;
    }, []);
    dispatch({ type: FETCH_PRODUCTS, payload: res });
  } catch (error) {
    console.log(error);
  }
};
export const clearCart = () => (dispatch) => dispatch({ type: CLEAR_CART });

export const addToCart = (id) => (dispatch) =>
  dispatch({ type: ADD_TO_CART, payload: id });

export const getTotalPrice = () => (dispatch) =>
  dispatch({ type: GET_TOTAL_PRICE });

export const increaseProduct = (id, price) => (dispatch) => {
  dispatch({ type: INCREASE_PRODUCT, payload: { id, price } });
  dispatch(getTotalPrice());
};
export const decreaseProduct = (id, price) => (dispatch) => {
  dispatch({ type: DECREASE_PRODUCT, payload: { id, price } });
  dispatch(getTotalPrice());
};

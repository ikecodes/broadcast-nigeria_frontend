import {
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  SET_CAT,
  ADD_TO_CART,
  CLEAR_CART,
  GET_TOTAL_PRICE,
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
} from '../constants/actionTypes';
import Toast from '../utils/Toast';
import * as api from '../api/api';

export const createProduct = (formdata) => async (dispatch) => {
  try {
    const {
      data: { newProduct },
    } = await api.createProduct(formdata);
    Toast('successfully saved product', 'success');
    dispatch({ type: ADD_PRODUCT, payload: newProduct });
  } catch (error) {
    Toast(error?.response?.data?.message, 'error');
  }
};
export const getAllProducts = () => async (dispatch) => {
  try {
    const {
      data: { products },
    } = await api.getAllProducts();
    dispatch({ type: FETCH_PRODUCTS, payload: products });
  } catch (error) {
    Toast(error?.response?.data?.message, 'error');
  }
};

export const setCategory = (category) => (dispatch) => {
  dispatch({ type: SET_CAT, payload: category });
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

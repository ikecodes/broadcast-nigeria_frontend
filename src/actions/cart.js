import {
  ADD_TO_CART,
  DELETE_CART,
  FETCH_CARTS,
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
} from '../constants/actionTypes';
import Toast from '../utils/Toast';
import * as api from '../api/api';

export const createCart = (formdata) => async (dispatch) => {
  try {
    const {
      data: { newCart },
    } = await api.createCart(formdata);
    dispatch({ type: ADD_TO_CART, payload: newCart });
    Toast('Added to cart', 'success');
  } catch (error) {
    Toast(error?.response?.data?.message, 'error');
  }
};
export const getAllCarts = () => async (dispatch) => {
  try {
    const {
      data: { carts },
    } = await api.getAllCarts();
    dispatch({ type: FETCH_CARTS, payload: carts });
  } catch (error) {
    Toast(error?.response?.data?.message, 'error');
  }
};

export const deleteCart = (id) => async (dispatch) => {
  try {
    await api.deleteCart(id);
    dispatch({ type: DELETE_CART, payload: id });
    Toast('Removed from cart', 'success');
  } catch (error) {
    Toast(error?.response?.data?.message, 'error');
  }
};

export const increaseProduct = (id) => (dispatch) => {
  dispatch({ type: INCREASE_PRODUCT, payload: id });
};
export const decreaseProduct = (id) => (dispatch) => {
  dispatch({ type: DECREASE_PRODUCT, payload: id });
};

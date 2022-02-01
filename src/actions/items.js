import {
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  SET_CAT,
  LOADING,
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
  dispatch({ type: LOADING });
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

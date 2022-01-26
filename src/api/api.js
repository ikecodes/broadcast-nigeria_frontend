import axios from 'axios';

const url = 'http://localhost:5000/api/v1/broadcast';

const API = axios.create({ baseURL: url });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});
////AUTH
export const login = (formdata) => API.post('/users/login', formdata);
export const getMe = () => API.get('/users/me');
export const signup = (formdata) => API.post('/users/signup', formdata);

/////PRODUCTS
export const getAllProducts = (formdata) => API.get('/products');
export const createProduct = (formdata) => API.post('/products', formdata);
export const getProduct = (id) => API.get(`/products/:id`);
export const deleteProduct = (id) => API.delete(`/products/${id}`);

///CARTS
export const getAllCarts = () => API.get('/carts');
export const createCart = (formdata) => API.post('/carts', formdata);
export const deleteCart = (id) => API.delete(`/products/${id}`);

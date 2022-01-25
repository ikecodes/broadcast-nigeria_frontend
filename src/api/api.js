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

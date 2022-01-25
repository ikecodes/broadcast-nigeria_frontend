import axios from 'axios';

const url = 'http://localhost:5000/api/v1/broadcast/';

const API = axios.create({ baseURL: url });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

export const signup = async (formdata) => API.post('/users/signup', formdata);
export const signin = async (formdata) => API.post('/users/login', formdata);

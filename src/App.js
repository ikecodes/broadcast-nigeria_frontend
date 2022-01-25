import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from './actions/items';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, Shop, Cart } from './pages';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Admin from './pages/Admin';
import AddProduct from './pages/AddProduct';
import GetProducts from './pages/GetProducts';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/shop' exact element={<Shop />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/cart' exact element={<Cart />} />
        <Route path='/productDetails' exact element={<ProductDetails />} />
        <Route path='/login' exact element={<Login />} />
        {/* /////////////////////////ADMIN */}
        <Route path='/admin' exact element={<Admin />} />
        <Route path='/addProduct' exact element={<AddProduct />} />
        <Route path='/getProducts' exact element={<GetProducts />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import AddProductForm from '../components/AddProductForm/AddProductForm';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const AddProduct = () => {
  return (
    <div>
      <Navbar />
      <AddProductForm />
      <Footer />
    </div>
  );
};

export default AddProduct;

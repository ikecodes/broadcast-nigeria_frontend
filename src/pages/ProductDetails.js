import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import ProductDetailsComponent from '../components/ProductDetails/ProductDetails';
const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <ProductDetailsComponent />
      <Footer />
    </div>
  );
};

export default ProductDetails;

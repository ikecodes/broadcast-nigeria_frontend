import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SelectAction from '../components/SelectAction/SelectAction';
const admin = () => {
  return (
    <div>
      <Navbar />
      <SelectAction />
      <Footer />
    </div>
  );
};

export default admin;

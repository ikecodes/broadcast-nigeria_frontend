import React from 'react';
import Header from '../components/Header/Header';
import HomeProducts from '../components/HomeProducts/HomeProducts';
import Navbar from '../components/Navbar/Navbar';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <HomeProducts />
      <Footer />
    </div>
  );
};

export default Home;

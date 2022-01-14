import React from 'react';
import Header from '../components/Header/Header';
import HomeProducts from '../components/HomeProducts/HomeProducts';
import Navbar from '../components/Navbar/Navbar';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';
import Welcome from '../components/Welcome/Welcome';
import Brands from '../components/Brands/Brands';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Welcome />
      <Services />
      <HomeProducts />
      <Brands />
      <Footer />
    </div>
  );
};

export default Home;

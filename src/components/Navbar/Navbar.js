import React from 'react';

import { Link } from 'react-router-dom';
import Cartlogo from './Cartlogo/Cartlogo';
import classes from './Navbar.module.css';

import Logo from '../../assets/plug_logo.png';
const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.nav__center} ${classes.container}`}>
        <Link to='/'>
          <div className={classes.nav__logo}>
            <img src={Logo} alt='Brand Logo' className={classes.nav__img} />
          </div>
        </Link>
        <Link to='/cart'>
          <Cartlogo />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

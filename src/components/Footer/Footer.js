import React from 'react';
import classes from './Footer.module.css';
import FooterLogo from '../../assets/logo-placeholder.jpg';
const Footer = () => {
  return (
    <div className={classes.footer_container}>
      <img src={FooterLogo} alt='Footer logo' />
      <ul>
        <li>shop</li>
        <li>contact</li>
        <li>about</li>
        <li>cart</li>
      </ul>
    </div>
  );
};

export default Footer;

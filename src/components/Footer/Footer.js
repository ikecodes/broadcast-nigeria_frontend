import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import classes from './Footer.module.css';
import FooterLogo from '../../assets/logo-placeholder.jpg';
const Footer = () => {
  return (
    <div className={classes.footer_container}>
      <div className={classes.footer_wrapper}>
        <img src={FooterLogo} alt='Footer logo' />
        <ul>
          <li>
            <h1>shop</h1>
          </li>
          <li>
            <h1>contact us</h1>
          </li>
          <li>
            <h1>about</h1>
          </li>
          <li>
            <h1>cart</h1>
          </li>
        </ul>
        <div>
          <div>
            <h1>Address</h1>
            <p>43 Round Table Drive North London</p>
          </div>
          <br />
          <div>
            <h1>tel:</h1>
            <p>+40440404040</p>
          </div>
        </div>

        <div>
          <h1>Subscribe to our Newsletter</h1>
          <input
            className={classes.footer_newsletter_input}
            type='text'
            placeholder='Enter email'
          />
          <button className={classes.footer_newsletter_button}>
            Subscribe
          </button>
          <div className={classes.footer_icons}>
            <FaTwitter size={30} />
            <FaFacebook size={30} />
            <FaInstagram size={30} />
          </div>
        </div>
      </div>
      <p className={classes.footer_copy}>
        Copy Right &copy;2021 - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;

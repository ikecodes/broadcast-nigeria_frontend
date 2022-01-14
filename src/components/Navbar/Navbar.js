import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap';
import Cartlogo from './Cartlogo/Cartlogo';
import classes from './Navbar.module.css';
import Logo2 from '../../assets/logo-placeholder.jpg';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  // const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      <div
        onClick={() => setShowAnimation((prev) => !prev)}
        className={`${classes.searcher} ${
          showAnimation ? classes.showSearcher : ''
        }`}
      >
        <div
          className={`${classes.search_background} ${
            showAnimation ? classes.showBackground : ''
          }`}
        >
          <input
            type='text'
            placeholder='Search for a product...'
            className={classes.search_input}
          />
          <FaSearch size={20} className={classes.search_icon} />
        </div>
      </div>
      <nav className={classes.nav}>
        <div className={`${classes.nav__center} ${classes.container}`}>
          <Link to='/'>
            <div className={classes.nav__logo}>
              <img src={Logo2} alt='Brand Logo' className={classes.nav__img} />
            </div>
          </Link>

          <div className={classes.nav_menu_container}>
            <Link to='/shop' className={classes.nav_item}>
              <h4>shop</h4>
            </Link>
            <Link to='/contact' className={classes.nav_item}>
              <h4>contact</h4>
            </Link>

            <FaSearch
              style={{ marginRight: '1.5rem' }}
              color='#fcb700'
              size={20}
              className='pointer'
              onClick={() => setShowAnimation((prev) => !prev)}
            />
            <Link to='/cart'>
              <Cartlogo />
            </Link>
          </div>
        </div>
      </nav>
      {/* <div className={classes.navbar_phonescreen_categories}>
        {arr.map((item) => (
          <Dropdown>
            <Dropdown.Toggle variant='light' id='dropdown-basic'>
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ))}
      </div> */}
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cartlogo from './Cartlogo/Cartlogo';
import classes from './Navbar.module.css';
import Logo2 from '../../assets/logo-placeholder.jpg';
import { FaSearch } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMe, logout } from '../../actions/auth';

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [showAnimation, setShowAnimation] = useState(false);
  useEffect(() => {
    dispatch(getMe());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, navigate]);
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
            {user ? (
              <Link
                to='/'
                className={classes.nav_item}
                onClick={() => dispatch(logout(navigate))}
              >
                <h4>logout</h4>
              </Link>
            ) : (
              <Link to='/login' className={classes.nav_item}>
                <h4>sign in</h4>
              </Link>
            )}

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

            {user && (
              <Link to='/' className={classes.nav_item}>
                <h4 className={classes.username}>Hi, {user?.lastname}</h4>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

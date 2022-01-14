import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner1 from '../../assets/banner1.jpg';
import Banner2 from '../../assets/banner2.jpg';
import Banner3 from '../../assets/banner3.jpg';
import classes from './Header.module.css';
const Header = () => {
  const imgArr = [
    {
      url: Banner1,
      title: 'radios',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ducimus fugit et incidunt ullam sapiente a impedit ipsam sunt.',
    },
    {
      url: Banner2,
      title: 'broadcasters',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ducimus fugit et incidunt ullam sapiente a impedit ipsam sunt.',
    },
    {
      url: Banner3,
      title: 'audio player',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ducimus fugit et incidunt ullam sapiente a impedit ipsam sunt.',
    },
  ];
  const getRand = () => Math.ceil(Math.random() * imgArr.length) - 1;
  const [image, setImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setImage(getRand());
    }, 3000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className={classes.header_background}>
        <img
          src={imgArr[image].url}
          alt='Banner'
          className={classes.header_image}
        />
        <div className={classes.header_overlay}></div>
        <div className={classes.header_content}>
          <h1>{imgArr[image].title}</h1>
          <p>{imgArr[image].description}</p>
          <Link to='/shop'>
            <button type='button' className={classes.btn}>
              shop now!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

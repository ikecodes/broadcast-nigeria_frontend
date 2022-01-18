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
      title: 'Blackmagic ATEM Constelliation',
      description:
        'powerful switcher in a 2 RU chassis that can easily handle 4K video and supports 8K.',
    },
    {
      url: Banner2,
      title: 'Blackmagic Pocket Cinema Camera 4K',
      description:
        'Introducing the next generationhandheld 4K digital film camera!',
    },
    {
      url: Banner3,
      title: 'Blackmagic Web Presenter HD',
      description:
        'Now you can make any professional SDI and HDMI video source appear as a USB webcam for high quality streaming on the internet!.',
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

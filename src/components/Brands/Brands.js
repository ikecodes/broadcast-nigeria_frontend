import React from 'react';
import Brand1 from '../../assets/brands/b1.png';
import Brand2 from '../../assets/brands/b2.png';
import Brand3 from '../../assets/brands/b3.png';
import Brand4 from '../../assets/brands/b4.png';
import Brand5 from '../../assets/brands/b5.png';
import Brand6 from '../../assets/brands/b6.png';
import Brand7 from '../../assets/brands/b7.png';
import Brand8 from '../../assets/brands/b8.png';
import Brand9 from '../../assets/brands/b9.png';
import classes from './Brands.module.css';

const Brands = () => {
  return (
    <div>
      <h1 className={classes.head}>shop by brands</h1>
      <div className={classes.brand_container}>
        <div>
          <img src={Brand5} alt='Brandlogo' />
        </div>
        <div>
          <img src={Brand1} alt='Brandlogo' />
        </div>
        <div>
          <img src={Brand2} alt='Brandlogo' />
        </div>
        <div>
          <img src={Brand3} alt='Brandlogo' />
        </div>
        <div>
          <img src={Brand4} alt='Brandlogo' />
        </div>
        <div>
          <img src={Brand6} alt='Brandlogo' />
        </div>
        <div>
          <img src={Brand8} alt='Brandlogo' />
        </div>
        <div>
          <img src={Brand7} alt='Brandlogo' />
        </div>

        <div>
          <img src={Brand9} alt='Brandlogo' />
        </div>
      </div>
    </div>
  );
};

export default Brands;

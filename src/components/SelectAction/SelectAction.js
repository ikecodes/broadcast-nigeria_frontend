import React from 'react';
import { Link } from 'react-router-dom';

import classes from './SelectAction.module.css';
const SelectAction = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.head}>Select Action</h1>
      <div className={classes.container}>
        <Link to='/addProduct'>
          <button>add product</button>
        </Link>
        <Link to='/getProducts'>
          <button>get products</button>
        </Link>
      </div>
    </div>
  );
};

export default SelectAction;

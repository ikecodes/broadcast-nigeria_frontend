import React from 'react';
import classes from './Service.module.css';
const Service = ({ icon, title, description }) => {
  return (
    <div className={classes.service_box}>
      {icon}
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;

import React from 'react';
import { FaHeadset, FaLock, FaUndoAlt } from 'react-icons/fa';
import Service from './Service/Service';
import classes from './Services.module.css';
const Services = () => {
  return (
    <div className={classes.services_container}>
      <Service
        icon={<FaUndoAlt size={50} color='#fcb700' />}
        title='money guarantee'
        description='30 Day Money Back Guarantee'
      />
      <Service
        icon={<FaLock size={50} color='#fcb700' />}
        title='secure payment'
        description='All Payment Method are accepted'
      />
      <Service
        icon={<FaHeadset size={50} color='#fcb700' />}
        title='online support 24/7'
        description='Technical Support Stand By'
      />
    </div>
  );
};

export default Services;

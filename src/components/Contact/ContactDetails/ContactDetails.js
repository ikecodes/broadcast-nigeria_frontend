import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import Service from '../../Services/Service/Service';
import classes from './ContactDetails.module.css';
const ContactDetails = () => {
  return (
    <div className={classes.contactDetails_container}>
      <Service
        icon={<FaMapMarkedAlt size={50} color='#fcb700' />}
        title='Where we are'
        description='Via Degli Orti, 1 – 40050 Funo di Argelato (BO)'
      />
      <Service
        icon={<FaPhone size={50} color='#fcb700' />}
        title='Phone'
        description='+39 051 00000'
      />
      <Service
        icon={<FaEnvelope size={50} color='#fcb700' />}
        title='Email'
        description='info@xxxx.com'
      />
    </div>
  );
};

export default ContactDetails;

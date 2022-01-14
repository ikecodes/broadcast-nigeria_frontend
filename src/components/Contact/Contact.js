import React from 'react';
import ContactDetails from './ContactDetails/ContactDetails';
import ContactForm from './ContactForm/ContactForm';
import classes from './Contact.module.css';
const Contact = () => {
  return (
    <div className={classes.contact_container}>
      <ContactDetails />
      <ContactForm />
    </div>
  );
};

export default Contact;

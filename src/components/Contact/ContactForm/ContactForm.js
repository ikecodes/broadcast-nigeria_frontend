import React from 'react';
import classes from './ContactForm.module.css';
const ContactForm = () => {
  return (
    <div>
      <h1 className={classes.head}>get in touch</h1>
      <form className={classes.contactform_container}>
        <input
          type='text'
          name='name'
          placeholder='Your name'
          className={classes.contactform_input}
        />
        <input
          type='email'
          name='email'
          placeholder='Your email address'
          className={classes.contactform_input}
        />
        <textarea
          name='message'
          placeholder='Your message'
          cols='30'
          rows='5'
          className={classes.contactform_input}
        ></textarea>
        <button className={classes.btn}>send message</button>
      </form>
    </div>
  );
};

export default ContactForm;

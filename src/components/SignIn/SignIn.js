import React, { useState } from 'react';
import classes from './SignIn.module.css';
const SignIn = () => {
  const [modeSignin, setModeSignin] = useState(true);
  return (
    <div className={classes.signin_container}>
      <h1 className={classes.head}>{modeSignin ? 'sign in' : 'sign up'}</h1>
      <form className={classes.signinform_container}>
        {!modeSignin && (
          <>
            <input
              type='text'
              name='name'
              placeholder='First Name'
              className={classes.signinform_input}
              required
            />
            <input
              type='text'
              name='name'
              placeholder='Last Name'
              className={classes.signinform_input}
              required
            />
          </>
        )}
        <input
          type='email'
          name='email'
          placeholder='Email'
          className={classes.signinform_input}
          required
        />
        {!modeSignin && (
          <div className={classes.signinform_phone}>
            <label>+234</label>
            <input
              type='tel'
              name='email'
              placeholder='Phone'
              required
              style={{ flexBasis: '100%' }}
            />
          </div>
        )}

        <input
          type='password'
          name='email'
          placeholder='Password'
          className={classes.signinform_input}
          required
        />
        {!modeSignin && (
          <input
            type='password'
            name='email'
            placeholder='Confirm Password'
            className={classes.signinform_input}
            required
          />
        )}

        <button className={classes.btn}>
          {modeSignin ? 'sign in' : 'sign up'}
        </button>

        {/* ///////////////////////////////////////////////////////////////////SET MODE */}
        {modeSignin ? (
          <p style={{ marginTop: '1rem', textTransform: 'capitalize' }}>
            don't have an account ?
            <span
              style={{
                fontWeight: '600',
                cursor: 'pointer',
                marginLeft: '1rem',
              }}
              onClick={() => setModeSignin((prev) => !prev)}
            >
              sign up
            </span>
          </p>
        ) : (
          <p style={{ margin: '1rem', textTransform: 'capitalize' }}>
            already have an account ?
            <span
              style={{
                fontWeight: '600',
                cursor: 'pointer',
                marginLeft: '1rem',
              }}
              onClick={() => setModeSignin((prev) => !prev)}
            >
              sign in
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default SignIn;

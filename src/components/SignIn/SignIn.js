import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup, login } from '../../actions/auth';
import classes from './SignIn.module.css';
import Toast from '../../utils/Toast';
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modeSignin, setModeSignin] = useState(true);
  const [formdata, setFormdata] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    passwordConfirm: '',
  });
  const changeMode = () => {
    setModeSignin(true);
  };
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!modeSignin && formdata.password !== formdata.passwordConfirm)
      return Toast('passwords do not match', 'error');
    if (
      !modeSignin &&
      (formdata.firstname === '' ||
        formdata.lastname === '' ||
        formdata.phone === '' ||
        formdata.address === '' ||
        formdata.email === '' ||
        formdata.password === '' ||
        formdata.passwordConfirm === '')
    )
      return Toast('please fill all fields', 'error');
    if (modeSignin && (formdata.email === '' || formdata.password === ''))
      return Toast('please fill all fields', 'error');
    if (modeSignin) {
      dispatch(login(formdata, navigate));
    } else {
      // return console.log(formdata);
      dispatch(signup(formdata, changeMode));
    }
  };
  return (
    <div className={classes.signin_container}>
      <h1 className={classes.head}>{modeSignin ? 'sign in' : 'sign up'}</h1>
      <form className={classes.signinform_container}>
        {!modeSignin && (
          <>
            <input
              type='text'
              name='firstname'
              placeholder='First Name'
              className={classes.signinform_input}
              required
              onChange={handleChange}
            />
            <input
              type='text'
              name='lastname'
              placeholder='Last Name'
              className={classes.signinform_input}
              required
              onChange={handleChange}
            />
          </>
        )}
        <input
          type='email'
          name='email'
          placeholder='Email'
          className={classes.signinform_input}
          required
          onChange={handleChange}
        />
        {!modeSignin && (
          <input
            type='tel'
            name='phone'
            placeholder='+234'
            required
            className={classes.signinform_input}
            onChange={handleChange}
          />
        )}

        {!modeSignin && (
          <textarea
            name='address'
            onChange={handleChange}
            cols='30'
            rows='3'
            placeholder='Enter your Full Address'
            required
            className={classes.signinform_input}
          ></textarea>
        )}

        <input
          type='password'
          name='password'
          placeholder='Password'
          className={classes.signinform_input}
          required
          onChange={handleChange}
        />
        {!modeSignin && (
          <input
            type='password'
            name='passwordConfirm'
            placeholder='Confirm Password'
            className={classes.signinform_input}
            required
            onChange={handleChange}
          />
        )}

        <button className={classes.btn} onClick={handleSubmit}>
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

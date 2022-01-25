import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import axios from 'axios';
import { groups } from '../../constants/data';
import classes from './AddProductForm.module.css';
const AddProductForm = () => {
  // const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({
    name: '',
    category: '',
    photo: '',
    description: '',
    price: '',
  });
  const [image, setImage] = useState('');
  const [productGroup, setProductGroup] = useState('TRANSMISSION');
  const { categories } = groups.find((item) => item.group === productGroup);

  const uploadImage = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'aeat47rc');
    data.append('cloud_name', 'dyptcpxrw');
    try {
      const {
        data: { url },
      } = await axios.post(
        'https://api.cloudinary.com/v1_1/dyptcpxrw/image/upload',
        data
      );
      setFormdata({
        ...formdata,
        photo: url,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
  };

  return (
    <div className={classes.addproduct_container}>
      <h1 className={classes.head}>Upload a product</h1>
      <form className={classes.addproductform_container}>
        <div className={classes.addproduct_wrapper}>
          <label>Name</label>
          <input
            type='text'
            name='name'
            className={classes.addproduct_input}
            onChange={handleChange}
          />
        </div>
        <div className={classes.addproduct_wrapper}>
          <label>Price</label>
          <input
            type='text'
            name='price'
            className={classes.addproduct_input}
            onChange={handleChange}
          />
        </div>
        <div className={classes.addproduct_wrapper}>
          <label>Description</label>
          <textarea
            name='description'
            cols='30'
            rows='3'
            className={classes.addproduct_input}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={classes.addproduct_wrapper}>
          <label>Group</label>
          <select
            name='group'
            onChange={(e) => setProductGroup(e.target.value)}
            className={classes.addproduct_input}
          >
            {groups.map((group) => (
              <option key={group.group}>{group.group}</option>
            ))}
          </select>
        </div>
        <div className={classes.addproduct_wrapper}>
          <label>Categories</label>
          <select
            name='category'
            className={classes.addproduct_input}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <option key={category} value='me'>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.addproduct_wrapper}>
          <input
            type='file'
            className={classes.addproduct_input}
            onChange={(e) => setImage(e.target.files[0])}
          ></input>
          <button className={classes.btn} onClick={uploadImage}>
            upload image
          </button>
        </div>
        <img
          src={formdata.photo}
          alt='product img'
          style={{ height: '10rem', width: '10rem' }}
        />
        <button className={classes.btn} onClick={handleSubmit}>
          save product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;

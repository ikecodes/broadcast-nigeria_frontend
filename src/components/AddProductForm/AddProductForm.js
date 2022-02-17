import React, { useState } from 'react';
import { createProduct } from '../../actions/items';
import { useDispatch } from 'react-redux';
// import axios from 'axios';
import { groups } from '../../constants/data';
import classes from './AddProductForm.module.css';
const AddProductForm = () => {
  const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({
    name: '',
    category: '',
    photo: '',
    description: '',
    price: '',
  });
  const [previewSource, setPreviewSource] = useState(null);
  const [productGroup, setProductGroup] = useState('TRANSMISSION');
  const { categories } = groups.find((item) => item.group === productGroup);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createProduct({ ...formdata, photo: previewSource }));
    setFormdata({
      ...formdata,
      name: '',
      category: '',
      photo: '',
      description: '',
      price: '',
    });
    setPreviewSource(null);
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
            value={formdata.name}
            className={classes.addproduct_input}
            onChange={handleChange}
          />
        </div>
        <div className={classes.addproduct_wrapper}>
          <label>Price</label>
          <input
            type='text'
            name='price'
            value={formdata.price}
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
            value={formdata.description}
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
            value={formdata.category}
            className={classes.addproduct_input}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className={classes.addproduct_wrapper}>
          <input
            type='file'
            className={classes.addproduct_input}
            onChange={handleFileChange}
          ></input>
        </div>
        {previewSource && (
          <img
            src={previewSource}
            alt='product img'
            style={{ height: '10rem', width: '10rem' }}
          />
        )}

        <button className={classes.btn} onClick={handleSubmit}>
          save product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;

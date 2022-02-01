import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory, loading } from '../../../actions/items';
const Category = ({ categories }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCategory = (category) => {
    dispatch(loading());
    dispatch(setCategory(category));
    navigate('/shop');
  };
  return (
    <ul>
      {categories.map((category) => (
        <li key={category} onClick={() => handleCategory(category)}>
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Category;

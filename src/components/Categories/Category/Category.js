import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../../actions/items';
const Category = ({ categories }) => {
  const dispatch = useDispatch();
  return (
    <ul>
      {categories.map((category) => (
        <li key={category} onClick={() => dispatch(setCategory(category))}>
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Category;

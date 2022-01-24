import React from 'react';
const Category = ({ categories }) => {
  return (
    <ul>
      {categories.map((category) => (
        <li>{category}</li>
      ))}
    </ul>
  );
};

export default Category;

import React from 'react';
const Category = ({ categories }) => {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </ul>
  );
};

export default Category;

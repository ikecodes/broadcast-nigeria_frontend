import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminProtected = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  return user?.role === 'admin' ? children : <Navigate to='/' />;
};

export default AdminProtected;

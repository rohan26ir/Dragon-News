import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
  return (
    <div className='font-poppins bg-gray-50'>
      <header className='py-12'>
        <Navbar></Navbar>
      </header>

      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <div>

      <h2 className='font-semibold'>Dragon News Home</h2>

      <Outlet></Outlet>
    </div>
  );
};

export default MainNavbar;
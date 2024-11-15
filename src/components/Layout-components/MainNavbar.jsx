import React from 'react';
import { Outlet } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <div>

      <Outlet></Outlet>
    </div>
  );
};

export default MainNavbar;
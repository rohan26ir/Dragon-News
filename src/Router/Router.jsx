import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../LayOuts/HomeLayout';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '',
        element: <Navigate to={'/category/01'}></Navigate>
      },
      {
        path: '/category/:id',
        element: <h2>This is category</h2>
      }
    ]
  },
  {
    path: '/about',
    element: <p>Thids</p>
  },
  {
    path: '/career',
    element: <p>Career</p>
  }
])

export default Router;
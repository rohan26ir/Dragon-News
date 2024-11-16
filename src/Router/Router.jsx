import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../LayOuts/HomeLayout';
import CategoryNews from '../Pages/CategoryNews';
import AuthLayout from '../LayOuts/AuthLayout';
import LogIn from '../Pages/LogIn';
import Register from '../Pages/Register';
import NewsDetails from '../Pages/NewsDetails';
import PrivetRoute from './PrivetRoute';

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
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      }
    ]
  },
  {
    path: '/news/:id',
    element: <PrivetRoute><NewsDetails></NewsDetails></PrivetRoute>,
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/career',
    element: <p>Career</p>
  }
])

export default Router;
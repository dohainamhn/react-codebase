import React from 'react';
import Home from 'pages/Home';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import { useRoutes } from 'react-router-dom';
import AuthLayout from 'components/PublicLayout';
import PrivateLayout from 'components/PrivateLayout';

export default function Routers() {
  const elements = useRoutes([
    {
      path: '/login',

      element: (
        <AuthLayout>
          <Login />
        </AuthLayout>
      ),
    },
    {
      path: '/',
      element: (
        <PrivateLayout>
          <Home />
        </PrivateLayout>
      ),
    },

    { path: '*', element: <NotFound /> },
  ]);
  return elements;
}

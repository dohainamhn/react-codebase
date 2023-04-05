import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import AuthLayout from 'components/PublicLayout';
import PrivateLayout from 'components/PrivateLayout';

// lazy load pages
const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const NotFound = lazy(() => import('pages/NotFound'));

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

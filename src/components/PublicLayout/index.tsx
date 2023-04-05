import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'stores/types';

interface Props {
  children?: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  const auth = useAppSelector((state) => state.auth.isLogin);
  return !auth ? <div>{children}</div> : <Navigate to="/" />;
};

export default AuthLayout;

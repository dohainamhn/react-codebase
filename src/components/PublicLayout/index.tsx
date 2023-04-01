import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'stores/types';

interface Props {
  children?: React.ReactNode;
}

const PublicLayout = ({ children }: Props) => {
  const auth = useAppSelector((state) => state.auth.isLogin);
  console.log('zoday2');

  return !auth ? <div>{children}</div> : <Navigate to="/" />;
};

export default PublicLayout;

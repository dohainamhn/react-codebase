import { Button } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { setIsLogin } from 'stores/reducers';
import { useAppDispatch, useAppSelector } from 'stores/types';

interface Props {
  children?: React.ReactNode;
}

const PrivateLayout = ({ children }: Props) => {
  const auth = useAppSelector((state) => state.auth.isLogin);
  const dispatch = useAppDispatch();
  const { deactivate } = useWeb3React();
  return auth ? (
    <div>
      <Button
        onClick={async () => {
          deactivate();
          dispatch(setIsLogin(false));
        }}
      >
        Logout
      </Button>
      <div></div>
      <Link to={'/'}>Home</Link>
      {children}
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateLayout;

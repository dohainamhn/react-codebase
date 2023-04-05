import React from 'react';
import { Button, ButtonProps, styled } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from 'connectors';
import { setIsLogin } from 'stores/reducers';
import { useAppDispatch, useAppSelector } from 'stores/types';
import Logo from 'assets/images/default-nft.svg';
const CustomButton = styled(Button)<ButtonProps>({});

const LoginPage = () => {
  const { activate } = useWeb3React();
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector((state) => state.auth.isLogin);
  console.log('isLogin', isLogin);
  return (
    <div>
      <CustomButton
        onClick={async () => {
          await activate(injectedConnector);
          dispatch(setIsLogin(true));
        }}
      >
        login
      </CustomButton>
      <img src={Logo}/>
    </div>
  );
};
export default LoginPage;

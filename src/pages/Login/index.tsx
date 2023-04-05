import React from 'react';
import { Button, ButtonProps, styled } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from 'connectors';
import { setIsLogin } from 'stores/reducers';
import { useAppDispatch } from 'stores/types';
const CustomButton = styled(Button)<ButtonProps>({});

const LoginPage = () => {
  const { activate } = useWeb3React();
  const dispatch = useAppDispatch();

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
    </div>
  );
};
export default LoginPage;

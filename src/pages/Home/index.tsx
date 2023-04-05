import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { styled, Typography, TypographyProps } from '@mui/material';
import { getRem } from 'utils/getRem';

const HomeTitle = styled(Typography)<TypographyProps>({
  fontSize: getRem(18),
});

const HomePage = () => {
  const { account } = useWeb3React();
  return <HomeTitle>Home Account: {account}</HomeTitle>;
};
export default HomePage;

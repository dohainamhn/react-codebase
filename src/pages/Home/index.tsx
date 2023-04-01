import React from 'react';
import { useWeb3React } from '@web3-react/core';

const HomePage = () => {
  const { account } = useWeb3React();
  return <div>Home Account: {account}</div>;
};
export default HomePage;

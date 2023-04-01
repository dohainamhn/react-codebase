import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from 'connectors';
import { useCallback, useEffect } from 'react';
import { setIsLogin } from 'stores/reducers';
import { useAppDispatch } from 'stores/types';

export const useEagerConnect = () => {
  const { activate } = useWeb3React();
  const dispatch = useAppDispatch();

  const handleReconnectWallet = useCallback(async () => {
    console.log('zoday55');
    const isAuthorized = await injectedConnector.isAuthorized();
    console.log('isAuthorized', isAuthorized);
    if (isAuthorized) {
      await activate(injectedConnector);
      dispatch(setIsLogin(true));
    } else {
    }
  }, []);

  useEffect(() => {
    handleReconnectWallet();
  }, []);
};

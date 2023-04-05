import { useWeb3React } from '@web3-react/core';
import {
  ConnectorNames,
  injectedConnector,
  walletconnectConnector,
} from 'connectors';
import { useCallback, useEffect } from 'react';
import { setIsLogin } from 'stores/reducers';
import { useAppDispatch } from 'stores/types';
import { WalletKey } from 'utils/constants';
import { StorageUtils } from 'utils/storage';

export const useEagerConnect = () => {
  const { activate } = useWeb3React();
  const dispatch = useAppDispatch();

  const handleReconnectWallet = useCallback(async () => {
    const walletType = StorageUtils.getItem(WalletKey);
    if (walletType === ConnectorNames.Metamask) {
      const isAuthorized = await injectedConnector.isAuthorized();
      if (isAuthorized) {
        await activate(injectedConnector);
        dispatch(setIsLogin(true));
      } else {
        StorageUtils.setItem(WalletKey, '');
      }
    } else if (walletType === ConnectorNames.WalletConnect) {
      try {
        await activate(walletconnectConnector);
        dispatch(setIsLogin(true));
      } catch (error) {
        StorageUtils.setItem(WalletKey, '');
      }
    }
  }, []);

  useEffect(() => {
    handleReconnectWallet();
  }, []);
};

import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

export enum ConnectorNames {
  Metamask = 'metamask',
  WalletConnect = 'walletconnect',
  Unsupported = 'Unsupported',
}
console.log('process.env',process.env);
export const injectedConnector = new InjectedConnector({
  supportedChainIds: [Number(process.env.NEXT_PUBLIC_CHAIN_ID || 5)],
});

export const walletconnectConnector = new WalletConnectConnector({
  rpc: {
    [Number(process.env.NEXT_PUBLIC_CHAIN_ID || 5)]:
      process.env.NEXT_PUBLIC_RPC_URL || 'https://rpc.ankr.com/eth_goerli',
  },
  chainId: Number(process.env.NEXT_PUBLIC_CHAIN_ID || 5),
  qrcode: true,
  supportedChainIds: [Number(process.env.NEXT_PUBLIC_CHAIN_ID || 5)],
  bridge: 'https://bridge.walletconnect.org',
});

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Metamask]: injectedConnector,
  [ConnectorNames.WalletConnect]: walletconnectConnector,
  [ConnectorNames.Unsupported]: injectedConnector,
};

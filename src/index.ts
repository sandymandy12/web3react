import * as Accounts from "./Accounts";
import * as Card from "./Card";
import * as Chain from "./Chain";
import * as Provider from "./Provider";
import * as Status from "./Status";

import * as MetaMaskCard from "./ConnectorCards/MetaMaskCard";
import * as WalletConnectCard from "./ConnectorCards/WalletConnectCard";

import * as CoinbaseWallet from "./Connectors/coinbaseWallet";
import * as MetaMaskWallet from "./Connectors/metaMask";
import * as EmptyWallet from "./Connectors/empty";
import * as Network from "./Connectors/network";
import * as WalletConnect from "./Connectors/walletConnect";

const Cards = {
  MetaMaskCard,
  WalletConnectCard,
};

const Connectors = {
  CoinbaseWallet,
  MetaMaskWallet,
  EmptyWallet,
  Network,
  WalletConnect,
};

export { Accounts, Card, Chain, Cards, Connectors, Provider, Status };

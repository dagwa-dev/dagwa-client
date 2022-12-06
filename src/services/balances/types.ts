import {
  Balances,
  ERC20TokenTransfers,
  GetBalancesForAddressParams,
  GetChangesInTokenHoldersBetweenTwoBlockHeightsParams,
  GetERC20TokenTransfersForAddressParams,
  GetTokenHoldersAsOfAnyBlockHeightParams,
  HistoricalPortfolioValue,
  TokenHolders,
} from "api/balances/types"

export type GetBalancesForAddress = (
  chainId: string,
  walletAddress: string,
  params?: GetBalancesForAddressParams,
) => Promise<Balances>

export type GetHistoricalPortfolioValueOverTime = (
  chainId: string,
  walletAddress: string,
) => Promise<HistoricalPortfolioValue>

export type GetERC20TokenTransfersForAddress = (
  chainId: string,
  walletAddress: string,
  params: GetERC20TokenTransfersForAddressParams,
) => Promise<ERC20TokenTransfers>

export type GetTokenHoldersAsOfAnyBlockHeight = (
  chainId: string,
  walletAddress: string,
  params: GetTokenHoldersAsOfAnyBlockHeightParams,
) => Promise<TokenHolders>

export type GetChangesInTokenHoldersBetweenTwoBlockHeights = (
  chainId: string,
  walletAddress: string,
  params: GetChangesInTokenHoldersBetweenTwoBlockHeightsParams,
) => Promise<object>

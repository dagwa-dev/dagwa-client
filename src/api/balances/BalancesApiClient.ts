import { appConfig } from "api/appConfig"
import { IAxiosApiClient } from "api/axios/interface"

import { IBalancesApiClient } from "./interface"
import {
  GetBalancesForAddress,
  GetBalancesForAddressReq,
  GetBalancesForAddressRes,
  GetChangesInTokenHoldersBetweenTwoBlockHeights,
  GetChangesInTokenHoldersBetweenTwoBlockHeightsReq,
  GetChangesInTokenHoldersBetweenTwoBlockHeightsRes,
  GetERC20TokenTransfersForAddress,
  GetERC20TokenTransfersForAddressReq,
  GetERC20TokenTransfersForAddressRes,
  GetHistoricalPortfolioValueOverTime,
  GetHistoricalPortfolioValueOverTimeReq,
  GetHistoricalPortfolioValueOverTimeRes,
  GetTokenHoldersAsOfAnyBlockHeight,
  GetTokenHoldersAsOfAnyBlockHeightReq,
  GetTokenHoldersAsOfAnyBlockHeightRes,
} from "./types"

export default class BalancesApiClient implements IBalancesApiClient {
  apiBase: string
  tokenApiClient: IAxiosApiClient

  constructor(tokenApiClient: IAxiosApiClient) {
    this.apiBase = appConfig.balancesApiBase
    this.tokenApiClient = tokenApiClient
  }

  getBalancesForAddress: GetBalancesForAddress = async (
    chainId,
    walletAddress,
    config,
  ) =>
    this.tokenApiClient.get<GetBalancesForAddressRes, GetBalancesForAddressReq>(
      `${chainId}/address/${walletAddress}/balances_v2/`,
      config,
    )

  getHistoricalPortfolioValueOverTime: GetHistoricalPortfolioValueOverTime =
    async (chainId, walletAddress) =>
      this.tokenApiClient.get<
        GetHistoricalPortfolioValueOverTimeRes,
        GetHistoricalPortfolioValueOverTimeReq
      >(`${chainId}/address/${walletAddress}/portfolio_v2/`)

  getERC20TokenTransfersForAddress: GetERC20TokenTransfersForAddress = async (
    chainId,
    walletAddress,
    config,
  ) =>
    this.tokenApiClient.get<
      GetERC20TokenTransfersForAddressRes,
      GetERC20TokenTransfersForAddressReq
    >(`${chainId}/address/${walletAddress}/transfers_v2/`, config)

  getTokenHoldersAsOfAnyBlockHeight: GetTokenHoldersAsOfAnyBlockHeight = async (
    chainId,
    walletAddress,
    config,
  ) =>
    this.tokenApiClient.get<
      GetTokenHoldersAsOfAnyBlockHeightRes,
      GetTokenHoldersAsOfAnyBlockHeightReq
    >(`${chainId}/tokens/${walletAddress}/token_holders/`, config)

  getChangesInTokenHoldersBetweenTwoBlockHeights: GetChangesInTokenHoldersBetweenTwoBlockHeights =
    async (chainId, walletAddress, config) =>
      this.tokenApiClient.get<
        GetChangesInTokenHoldersBetweenTwoBlockHeightsRes,
        GetChangesInTokenHoldersBetweenTwoBlockHeightsReq
      >(`${chainId}/tokens/${walletAddress}/token_holders_changes/`, config)
}

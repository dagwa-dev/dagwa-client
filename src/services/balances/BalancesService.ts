import { IBalancesApiClient } from "api/balances/interface"

import { IBalancesService } from "./interface"
import {
  GetBalancesForAddress,
  GetChangesInTokenHoldersBetweenTwoBlockHeights,
  GetERC20TokenTransfersForAddress,
  GetHistoricalPortfolioValueOverTime,
  GetTokenHoldersAsOfAnyBlockHeight,
} from "./types"

export class BalancesService implements IBalancesService {
  readonly tokensApiClient

  constructor(tokensApiClient: IBalancesApiClient) {
    this.tokensApiClient = tokensApiClient
  }

  getBalancesForAddress: GetBalancesForAddress = async (
    chainId,
    walletAddress,
    params,
  ) => {
    const data = await this.tokensApiClient.getBalancesForAddress(
      chainId,
      walletAddress,
      { params },
    )
    return data.data
  }

  getHistoricalPortfolioValueOverTime: GetHistoricalPortfolioValueOverTime =
    async (chainId, walletAddress) => {
      const data =
        await this.tokensApiClient.getHistoricalPortfolioValueOverTime(
          chainId,
          walletAddress,
        )
      return data.data
    }

  getERC20TokenTransfersForAddress: GetERC20TokenTransfersForAddress = async (
    chainId,
    walletAddress,
    params,
  ) => {
    const data = await this.tokensApiClient.getERC20TokenTransfersForAddress(
      chainId,
      walletAddress,
      { params },
    )
    return data.data
  }

  getTokenHoldersAsOfAnyBlockHeight: GetTokenHoldersAsOfAnyBlockHeight = async (
    chainId,
    walletAddress,
    params,
  ) => {
    const data = await this.tokensApiClient.getTokenHoldersAsOfAnyBlockHeight(
      chainId,
      walletAddress,
      { params },
    )
    return data.data
  }

  getChangesInTokenHoldersBetweenTwoBlockHeights: GetChangesInTokenHoldersBetweenTwoBlockHeights =
    async (chainId, walletAddress, params) => {
      const data =
        await this.tokensApiClient.getChangesInTokenHoldersBetweenTwoBlockHeights(
          chainId,
          walletAddress,
          { params },
        )
      return data.data
    }
}

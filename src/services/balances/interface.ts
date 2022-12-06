import { IBalancesApiClient } from "api/balances/interface"

import {
  GetBalancesForAddress,
  GetChangesInTokenHoldersBetweenTwoBlockHeights,
  GetERC20TokenTransfersForAddress,
  GetHistoricalPortfolioValueOverTime,
  GetTokenHoldersAsOfAnyBlockHeight,
} from "./types"

export interface IBalancesService {
  readonly tokensApiClient: IBalancesApiClient
  getBalancesForAddress: GetBalancesForAddress
  getHistoricalPortfolioValueOverTime: GetHistoricalPortfolioValueOverTime
  getERC20TokenTransfersForAddress: GetERC20TokenTransfersForAddress
  getTokenHoldersAsOfAnyBlockHeight: GetTokenHoldersAsOfAnyBlockHeight
  getChangesInTokenHoldersBetweenTwoBlockHeights: GetChangesInTokenHoldersBetweenTwoBlockHeights
}

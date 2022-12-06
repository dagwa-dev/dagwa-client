import {
  GetBalancesForAddress,
  GetChangesInTokenHoldersBetweenTwoBlockHeights,
  GetERC20TokenTransfersForAddress,
  GetHistoricalPortfolioValueOverTime,
  GetTokenHoldersAsOfAnyBlockHeight,
} from "./types"

export interface IBalancesApiClient {
  getBalancesForAddress: GetBalancesForAddress
  getHistoricalPortfolioValueOverTime: GetHistoricalPortfolioValueOverTime
  getERC20TokenTransfersForAddress: GetERC20TokenTransfersForAddress
  getTokenHoldersAsOfAnyBlockHeight: GetTokenHoldersAsOfAnyBlockHeight
  getChangesInTokenHoldersBetweenTwoBlockHeights: GetChangesInTokenHoldersBetweenTwoBlockHeights
}

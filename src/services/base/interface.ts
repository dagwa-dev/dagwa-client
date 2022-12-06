import { IBaseApiClient } from "api/base/interface"

import {
  GetAllChains,
  GetAllChainStatuses,
  GetBlock,
  GetBlockHeight,
  GetLogEventsByContractAddress,
  GetLogEventsByTopicHashes,
} from "./types"

export interface IBaseService {
  readonly transactionsApiClient: IBaseApiClient
  getBlock: GetBlock
  getBlockHeight: GetBlockHeight
  getLogEventsByContractAddress: GetLogEventsByContractAddress
  getLogEventsByTopicHashes: GetLogEventsByTopicHashes
  getAllChains: GetAllChains
  getAllChainStatuses: GetAllChainStatuses
}

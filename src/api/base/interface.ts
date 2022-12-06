import {
  GetAllChains,
  GetAllChainStatuses,
  GetBlock,
  GetBlockHeight,
  GetLogEventsByContractAddress,
  GetLogEventsByTopicHashes,
} from "./types"

export interface IBaseApiClient {
  getBlock: GetBlock
  getBlockHeight: GetBlockHeight
  getLogEventsByContractAddress: GetLogEventsByContractAddress
  getLogEventsByTopicHashes: GetLogEventsByTopicHashes
  getAllChains: GetAllChains
  getAllChainStatuses: GetAllChainStatuses
}

import {
  GetAllChainsParams,
  GetAllChainStatusesParams,
  GetBlockHeightParams,
  GetBlockParams,
  GetLogEventsByContractAddressParams,
  GetLogEventsByTopicHashesParams,
} from "api/base/types"

export type GetBlock = (
  chainId: string,
  blockHeight: string,
  params?: GetBlockParams,
) => Promise<object>

export type GetBlockHeight = (
  chainId: string,
  startDate: string,
  endDate: string,
  params?: GetBlockHeightParams,
) => Promise<object>

export type GetLogEventsByContractAddress = (
  chainId: string,
  contractAddress: string,
  params?: GetLogEventsByContractAddressParams,
) => Promise<object>

export type GetLogEventsByTopicHashes = (
  chainId: string,
  topic: string,
  params?: GetLogEventsByTopicHashesParams,
) => Promise<object>

export type GetAllChains = (params?: GetAllChainsParams) => Promise<object>

export type GetAllChainStatuses = (
  params?: GetAllChainStatusesParams,
) => Promise<object>

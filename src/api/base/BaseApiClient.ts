import { appConfig } from "api/appConfig"
import { IAxiosApiClient } from "api/axios/interface"

import { IBaseApiClient } from "./interface"
import {
  GetAllChains,
  GetAllChainsReq,
  GetAllChainsRes,
  GetAllChainStatuses,
  GetAllChainStatusesReq,
  GetAllChainStatusesRes,
  GetBlock,
  GetBlockHeight,
  GetBlockHeightReq,
  GetBlockHeightRes,
  GetBlockReq,
  GetBlockRes,
  GetLogEventsByContractAddress,
  GetLogEventsByContractAddressReq,
  GetLogEventsByContractAddressRes,
  GetLogEventsByTopicHashes,
  GetLogEventsByTopicHashesReq,
  GetLogEventsByTopicHashesRes,
} from "./types"

export default class BaseApiClient implements IBaseApiClient {
  apiBase: string
  nftApiClient: IAxiosApiClient

  constructor(nftApiClient: IAxiosApiClient) {
    this.apiBase = appConfig.nftApiBase
    this.nftApiClient = nftApiClient
  }

  getBlock: GetBlock = async (chainId, blockHeight, config) =>
    this.nftApiClient.get<GetBlockRes, GetBlockReq>(
      `${chainId}/block_v2/${blockHeight}/transactions_v2/`,
      config,
    )

  getBlockHeight: GetBlockHeight = async (
    chainId,
    startDate,
    endDate,
    config,
  ) =>
    this.nftApiClient.get<GetBlockHeightRes, GetBlockHeightReq>(
      `${chainId}/transaction_v2/${startDate}/${endDate}/`,
      config,
    )

  getLogEventsByContractAddress: GetLogEventsByContractAddress = async (
    chainId,
    contractAddress,
    config,
  ) =>
    this.nftApiClient.get<
      GetLogEventsByContractAddressRes,
      GetLogEventsByContractAddressReq
    >(`${chainId}/events/address/${contractAddress}/`, config)

  getLogEventsByTopicHashes: GetLogEventsByTopicHashes = async (
    chainId,
    topics,
    config,
  ) =>
    this.nftApiClient.get<
      GetLogEventsByTopicHashesRes,
      GetLogEventsByTopicHashesReq
    >(`${chainId}/events/topics/${topics}/`, config)

  getAllChains: GetAllChains = async (config) =>
    this.nftApiClient.get<GetAllChainsRes, GetAllChainsReq>(`chains`, config)

  getAllChainStatuses: GetAllChainStatuses = async (config) =>
    this.nftApiClient.get<GetAllChainStatusesRes, GetAllChainStatusesReq>(
      `chains/status/`,
      config,
    )
}

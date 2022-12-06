import { IBaseApiClient } from "api/base/interface"

import { IBaseService } from "./interface"
import {
  GetAllChains,
  GetAllChainStatuses,
  GetBlock,
  GetBlockHeight,
  GetLogEventsByContractAddress,
  GetLogEventsByTopicHashes,
} from "./types"

export class BaseService implements IBaseService {
  readonly transactionsApiClient

  constructor(transactionsApiClient: IBaseApiClient) {
    this.transactionsApiClient = transactionsApiClient
  }

  getBlock: GetBlock = async (chainId, blockHeight, params) => {
    const data = await this.transactionsApiClient.getBlock(
      chainId,
      blockHeight,
      { params },
    )
    return data.data
  }

  getBlockHeight: GetBlockHeight = async (
    chainId,
    startDate,
    endDate,
    params,
  ) => {
    const data = await this.transactionsApiClient.getBlockHeight(
      chainId,
      startDate,
      endDate,
      { params },
    )
    return data.data
  }

  getLogEventsByContractAddress: GetLogEventsByContractAddress = async (
    chainId,
    contractAddress,
    params,
  ) => {
    const data = await this.transactionsApiClient.getLogEventsByContractAddress(
      chainId,
      contractAddress,
      { params },
    )
    return data.data
  }

  getLogEventsByTopicHashes: GetLogEventsByTopicHashes = async (
    chainId,
    topic,
    params,
  ) => {
    const data = await this.transactionsApiClient.getLogEventsByTopicHashes(
      chainId,
      topic,
      { params },
    )
    return data.data
  }

  getAllChains: GetAllChains = async (params) => {
    const data = await this.transactionsApiClient.getAllChains({ params })
    return data.data
  }

  getAllChainStatuses: GetAllChainStatuses = async (params) => {
    const data = await this.transactionsApiClient.getAllChainStatuses({
      params,
    })
    return data.data
  }
}

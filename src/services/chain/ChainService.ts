import { IChainApiClient } from "api/chain/interface"

import { IChainService } from "./interface"
import { GetChain, GetChains } from "./types"

export class ChainService implements IChainService {
  readonly apiClient

  constructor(apiClient: IChainApiClient) {
    this.apiClient = apiClient
  }

  getChain: GetChain = async (id) => {
    const result = await this.apiClient.getOne(id)

    return result
  }

  getChains: GetChains = async (params) => {
    const result = await this.apiClient.getAll({ params })

    return result
  }
}

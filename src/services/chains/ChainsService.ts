import { IChainsApiClient } from "api/chains/interface"

import { IChainsService } from "./interface"
import { GetChain, GetChains } from "./types"

export class ChainsService implements IChainsService {
  readonly chainsApiClient

  constructor(chainsApiClient: IChainsApiClient) {
    this.chainsApiClient = chainsApiClient
  }

  getChain: GetChain = async (chainId) => {
    const result = await this.chainsApiClient.getChain(chainId)
    return result
  }

  getChains: GetChains = async (params) => {
    const result = await this.chainsApiClient.getChains({ params })
    return result
  }
}

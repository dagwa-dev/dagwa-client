import { IChainsApiClient } from "api/chains/interface"

import { IChainsService } from "./interface"
import { GetChain, GetChains, GetChainTvls } from "./types"

export class ChainsService implements IChainsService {
  readonly chainsApiClient

  constructor(chainsApiClient: IChainsApiClient) {
    this.chainsApiClient = chainsApiClient
  }

  getChain: GetChain = async (chainId) => {
    return this.chainsApiClient.getChain(chainId)
  }

  getChains: GetChains = async () => {
    return this.chainsApiClient.getChains()
  }

  getChainTvls: GetChainTvls = async () => {
    return this.chainsApiClient.getChainTvls()
  }
}

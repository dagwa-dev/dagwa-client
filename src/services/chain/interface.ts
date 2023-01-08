import { IChainApiClient } from "api/chain/interface"

import { GetChain, GetChains } from "./types"

export interface IChainsService {
  readonly apiClient: IChainApiClient
  getChain: GetChain
  getChains: GetChains
}

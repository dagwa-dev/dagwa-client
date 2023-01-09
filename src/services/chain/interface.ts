import { IChainApiClient } from "api/chain/interface"

import { GetChain, GetChains } from "./types"

export interface IChainService {
  readonly apiClient: IChainApiClient
  getChain: GetChain
  getChains: GetChains
}

import { IChainsApiClient } from "api/chains/interface"

import { GetChain, GetChains } from "./types"

export interface IChainsService {
  readonly chainsApiClient: IChainsApiClient
  getChain: GetChain
  getChains: GetChains
}

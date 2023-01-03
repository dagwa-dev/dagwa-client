import { GetChain, GetChains } from "./types"

export interface IChainsApiClient {
  getChain: GetChain
  getChains: GetChains
}

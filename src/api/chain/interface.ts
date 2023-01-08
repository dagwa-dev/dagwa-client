import { GetAllChain, GetOneChain } from "./types"

export interface IChainApiClient {
  getOne: GetOneChain
  getAll: GetAllChain
}

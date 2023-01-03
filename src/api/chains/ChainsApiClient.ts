import { appConfig } from "api/appConfig"
import { IAxiosApiClient } from "api/axios/interface"

import { IChainsApiClient } from "./interface"
import {
  GetChain,
  GetChainReq,
  GetChainRes,
  GetChains,
  GetChainsReq,
  GetChainsRes,
} from "./types"

export default class ChainsApiClient implements IChainsApiClient {
  path = "chain"
  apiBase: string
  chainApiClient: IAxiosApiClient

  constructor(chainApiClient: IAxiosApiClient) {
    this.apiBase = appConfig.dagwaApiBase
    this.chainApiClient = chainApiClient
  }

  getChain: GetChain = async (chainId) =>
    this.chainApiClient.get<GetChainRes, GetChainReq>(`${this.path}/${chainId}`)

  getChains: GetChains = async (config) =>
    this.chainApiClient.get<GetChainsRes, GetChainsReq>(this.path, config)
}

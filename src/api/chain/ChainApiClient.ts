import { appConfig } from "api/appConfig"
import { IAxiosApiClient } from "api/axios/interface"

import { IChainApiClient } from "./interface"
import {
  GetAllChain,
  GetAllChainReq,
  GetAllChainRes,
  GetOneChain,
  GetOneChainReq,
  GetOneChainRes,
} from "./types"

export default class ChainApiClient implements IChainApiClient {
  apiBase: string
  apiClient: IAxiosApiClient

  constructor(apiClient: IAxiosApiClient) {
    this.apiBase = appConfig.chainApiBase
    this.apiClient = apiClient
  }

  getOne: GetOneChain = async (id) =>
    this.apiClient.get<GetOneChainRes, GetOneChainReq>(`${this.apiBase}/${id}`)

  getAll: GetAllChain = async (config) =>
    this.apiClient.get<GetAllChainRes, GetAllChainReq>(this.apiBase, config)
}

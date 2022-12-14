import { appConfig } from "api/appConfig"
import { IAxiosApiClient } from "api/axios/interface"
import { getChain } from "lib/chains"

import { IDagwaApiClient } from "./interface"
import {
  GetChainsReq,
  GetChainsRes,
  GetChainTvlsReq,
  GetChainTvlsRes,
} from "./types"

export default class DagwaApiClient implements IDagwaApiClient {
  apiBase: string
  tvlsApiBase: string
  dagwaApiClient: IAxiosApiClient

  constructor(dagwaApiClient: IAxiosApiClient) {
    this.apiBase = appConfig.dagwaApiBase
    this.tvlsApiBase = appConfig.chainTvlsApiBase
    this.dagwaApiClient = dagwaApiClient
  }

  getChain = async (chainId: string) => {
    const chains = await this.getChains()
    const chain = chains.find((chain) => String(chain.chainId) === chainId)
    return chain
  }

  getChains = () => {
    return this.dagwaApiClient.get<GetChainsRes, GetChainsReq>(
      `${this.apiBase}/chains.json`,
    )
  }

  getChainTvls = () => {
    return this.dagwaApiClient.get<GetChainTvlsRes, GetChainTvlsReq>(
      `${this.tvlsApiBase}/chains/`,
    )
  }
}

import { appConfig } from "api/appConfig"
import { IAxiosApiClient } from "api/axios/interface"
import { getChain } from "lib/chains"

import { IChainsApiClient } from "./interface"
import {
  GetChainsReq,
  GetChainsRes,
  GetChainTvlsReq,
  GetChainTvlsRes,
} from "./types"

export default class ChainsApiClient implements IChainsApiClient {
  apiBase: string
  tvlsApiBase: string
  chainApiClient: IAxiosApiClient

  constructor(chainApiClient: IAxiosApiClient) {
    this.apiBase = appConfig.chainApiBase
    this.tvlsApiBase = appConfig.chainTvlsApiBase
    this.chainApiClient = chainApiClient
  }

  getChain = async (chainId: string) => {
    const chains = await this.getChains()
    const chain = chains.find((chain) => String(chain.chainId) === chainId)
    return chain
  }

  getChains = () => {
    return this.chainApiClient.get<GetChainsRes, GetChainsReq>(
      `${this.apiBase}/chains.json`,
    )
  }

  getChainTvls = () => {
    return this.chainApiClient.get<GetChainTvlsRes, GetChainTvlsReq>(
      `${this.tvlsApiBase}/chains/`,
    )
  }
}

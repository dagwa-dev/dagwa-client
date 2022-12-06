import { RequestConfig } from "api/axios/types"
import { Chain, ChainTvl } from "utils/chains/types"

// Common Chainss Get Method
export type CommonChainsGetMethod<C = any, R = any> = (config?: C) => Promise<R>

// GetChains
export type GetChainsReq = object
export type GetChainsRes = Chain[]
export type GetChainsParams = object
export type GetChainsConfig = RequestConfig<GetChainsReq, GetChainsParams>
export type GetChains = CommonChainsGetMethod<GetChainsConfig, GetChainsRes>

// GetChainTvls
export type GetChainTvlsReq = object
export type GetChainTvlsRes = ChainTvl[]
export type GetChainTvlsParams = object
export type GetChainTvlsConfig = RequestConfig<
  GetChainTvlsReq,
  GetChainTvlsParams
>
export type GetChainTvls = CommonChainsGetMethod<
  GetChainTvlsConfig,
  GetChainTvlsRes
>

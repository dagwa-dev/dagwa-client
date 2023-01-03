import { RequestConfig } from "api/axios/types"
import { PageOptions, PageResultAsync } from "api/common/types"
import { Chain } from "models/chain"

// GetChain
export type GetChainReq = object
export type GetChainRes = Promise<Chain>
export type GetChain = (chainId: string) => GetChainRes
// GetChains
export type GetChainsReq = object
export type GetChainsRes = PageResultAsync<Chain>
export type GetChainsParams = PageOptions
export type GetChainsConfig = RequestConfig<GetChainsReq, GetChainsParams>
export type GetChains = (config: GetChainsConfig) => GetChainsRes

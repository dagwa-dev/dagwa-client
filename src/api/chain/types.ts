import { RequestConfig } from "api/axios/types"
import { PageOptions, PageResultAsync } from "api/common/types"
import { Chain } from "models/chain"

// GetOneChain
export type GetOneChainReq = object
export type GetOneChainRes = Promise<Chain>
export type GetOneChain = (id: string) => GetOneChainRes
// GetAllChain
export type GetAllChainReq = object
export type GetAllChainRes = PageResultAsync<Chain>
export type GetAllChainParams = PageOptions
export type GetAllChainConfig = RequestConfig<GetAllChainReq, GetAllChainParams>
export type GetAllChain = (config: GetAllChainConfig) => GetAllChainRes

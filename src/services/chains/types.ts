import { GetChainRes, GetChainsRes } from "api/chains/types"
import { PageOptions } from "api/common/types"

export type GetChain = (chainId: string) => GetChainRes
export type GetChains = (params: PageOptions) => GetChainsRes

import { GetAllChainRes, GetOneChainRes } from "api/chain/types"
import { PageOptions } from "api/common/types"

export type GetChain = (id: string) => GetOneChainRes
export type GetChains = (params: PageOptions) => GetAllChainRes

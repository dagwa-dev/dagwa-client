import { PageOptions, PageResult } from "~/api/common/types"
import { Chain } from "~/models/chain"

// GetOneChain
export type GetOneChainRes = Chain
export type GetOneChain = (url: string) => Promise<GetOneChainRes>
// GetAllChain
export type GetAllChainRes = PageResult<Chain>
export type GetAllChainParams = PageOptions
export type GetAllChain = (
  url: string,
  params: GetAllChainParams,
) => Promise<GetAllChainRes>

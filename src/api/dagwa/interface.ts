import { Chain } from "lib/chains/types"

import { GetChains, GetChainTvls } from "./types"

export interface IDagwaApiClient {
  getChain(chainId: string): Promise<Chain | undefined>
  getChains: GetChains
  getChainTvls: GetChainTvls
}

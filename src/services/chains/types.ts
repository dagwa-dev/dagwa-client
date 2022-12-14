import { Chain, ChainTvl } from "lib/chains/types"

export type GetChain = (chainId: string) => Promise<Chain | undefined>
export type GetChains = () => Promise<Chain[]>
export type GetChainTvls = () => Promise<ChainTvl[]>

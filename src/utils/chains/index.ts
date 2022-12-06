import { matchIncludWithLowerCase } from "utils/common"

import { allExtraRpcs, chainIds, chainList } from "./constants"
import { Chain, ChainTvl } from "./types"

export const getChain = (chainId: string) => {
  return chainList.find((value) => value.chainId === chainId)
}

export const getChainList = () => {
  return chainList
}

function removeEndingSlash(rpc: string) {
  return rpc.endsWith("/") ? rpc.substring(0, rpc.length - 1) : rpc
}

export const populateChain = (chain: Chain, chainTvls: ChainTvl[]) => {
  const extraRpcs = allExtraRpcs[chain.chainId]?.rpcs

  if (extraRpcs !== undefined) {
    const rpcs = new Set(
      chain.rpc
        .map(removeEndingSlash)
        .filter((rpc) => !rpc.includes("${INFURA_API_KEY}")),
    )

    extraRpcs.forEach((rpc) => rpcs.add(removeEndingSlash(rpc)))

    chain.rpc = Array.from(rpcs)
  }

  const chainSlug = chainIds[chain.chainId]

  if (chainSlug !== undefined) {
    const defiChain = chainTvls.find((c) => c.name.toLowerCase() === chainSlug)

    return defiChain === undefined
      ? chain
      : {
          ...chain,
          tvl: defiChain.tvl,
          chainSlug,
        }
  }
  return chain
}

export const isTestnetChain = (chain: Chain) =>
  matchIncludWithLowerCase("test", chain.name) ||
  matchIncludWithLowerCase("test", chain.title) ||
  matchIncludWithLowerCase("test", chain.network)

export const isDevnetChain = (chain: Chain) =>
  matchIncludWithLowerCase("devnet", chain.name) ||
  matchIncludWithLowerCase("devnet", chain.title) ||
  matchIncludWithLowerCase("devnet", chain.network)

export const isTestnetOrDevnetChain = (chain: Chain) =>
  isTestnetChain(chain) || isDevnetChain(chain)

export const sortingChainsWithTvls = (chains: Chain[], chainTvls: ChainTvl[]) =>
  chains
    .filter((c) => c.name !== "420coin") // same chainId as ronin
    .map((chain) => populateChain(chain, chainTvls))
    .sort((a, b) => (b.tvl ?? 0) - (a.tvl ?? 0))

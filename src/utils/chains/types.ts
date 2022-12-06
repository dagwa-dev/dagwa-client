export type NativeCurrency = {
  name: string
  symbol: string
  decimals: number
}

export type ENS = {
  registry: string
}

export type Explorer = {
  name: string
  url: string
  standard: string
  icon?: string
}

export type Bridge = {
  url: string
}

export type Parent = {
  type: string
  chain: string
  bridges?: Bridge[]
}

export type Chain = {
  name: string
  networkId: number
  chain: string
  chainId: string
  rpc: string[]
  faucets: string | string[]
  nativeCurrency: NativeCurrency
  infoURL: string
  shortName: string
  title?: string
  icon?: string
  slip44?: number
  ens?: ENS
  explorers?: Explorer[]
  parent?: Parent
  status?: string
  redFlags?: string[]
  tvl?: number
  chainSlug?: string
  network?: string
}

export type ExtraRpcs = {
  rpcs: string[]
  rpcWorking?: boolean
  websiteUrl?: string
  websiteDead?: string | boolean
  possibleRebrand?: string
}

export type ChainTvl = {
  gecko_id: string
  tvl: number
  tokenSymbol: string
  cmcId: string
  name: string
  chainId: string
}

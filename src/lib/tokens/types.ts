export type CurrencyToken = {
  type: "currency"
  chainId: string
  tokenId: string
  address: string
  name: string
  ticker: string
  tags: string[]
  logoImgSrc: string | null
  ens: string | null
  bio?: string | null
}
export type PlatformToken = {
  type: "platform"
  tokenId: string
  name: string
  ticker: string
  tags: string[]
  logoImgSrc: string | null
  ens: string | null
  bio?: string | null
}
export type NFTsToken = {
  type: "nft"
  chainId: string
  tokenId: string
  address: string
  name: string
  ticker: string
  tags: string[]
  logoImgSrc: string | null
  ens: string | null
  bio?: string | null
}
export type Token = CurrencyToken | PlatformToken | NFTsToken

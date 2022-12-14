export type CategoryInterests = {
  name: string
  label: string
}

export type OfficialLinks = {
  twitter: string | null
  instagram: string | null
  website: string | null
  github: string | null
  discord: string | null
  facebook: string | null
  telegram: string | null
  whitepaper: string | null
  cmc: string | null
}

type PopularTokenPlatform =
  | "Ethereum Ecosystem"
  | "Asset-Backed Token"
  | "TRON Ecosystem"
  | "Polkadot"
  | "Binance Chain"
  | "BNB Smart Chain"
  | "Polkadot Ecosystem"
  | "HECO Ecosystem"
  | "Avalanche Ecosystem"
  | "Solana Ecosystem"
  | "Wrapped Tokens"
  | "Synthetics"
  | "ETH 2.0 Staking"
  | "Polygon Ecosystem"
  | "Fantom Ecosystem"
  | "Arbitrum Ecosystem"
  | "IoTeX Ecosystem"
  | "Zilliqa Ecosystem"
  | "Cronos Ecosystem"
  | "Cardano"
  | "Injective Ecosystem"

type UnpopularTokenPlatform =
  | "Omni"
  | "Nxt"
  | "Counterparty"
  | "BitShares"
  | "Komodo"
  | "Ardor"
  | "NuBits"
  | "Horizon"
  | "Ubiq"
  | "XRP"
  | "Waves"
  | "Stellar"
  | "Burst"
  | "NEM"
  | "Neo"
  | "VeChain"
  | "Qtum"
  | "Binance Coin"
  | "EOS"
  | "ICON"
  | "Cosmos"
  | "Bitcoin Cash"
  | "PIVX"
  | "Ontology Ecosystem"
  | "Nebulas"
  | "RSK Smart Bitcoin"
  | "IOST"
  | "Wanchain"
  | "HTMLCOIN"
  | "Neblio"
  | "Zeepin"
  | "TrueChain"
  | "Phore"
  | "INT Chain"
  | "v.systems"
  | "Teloscoin"
  | "VITE"
  | "GXChain"
  | "Hive"
  | "Yocoin"
  | "Stratis"
  | "Horizen"
  | "Chiliz"
  | "OKExChain Ecosystem"
  | "Reef Chain"
  | "EthereumPoW Ecosystem"

export type TokenPlatform = PopularTokenPlatform | UnpopularTokenPlatform

type AppConfig = {
  cmcKey: string
  authApiBase: string
  nftApiBase: string
  cryptoCurrencyApiBase: string
  cmcApiBase: string
  covalentApiBase: string
  sampleWalletAddress: string
  chainApiBase: string
  chainTvlsApiBase: string
  balancesApiBase: string
  covalentKey: string
  accessToken: string
  dagwaApiBase: string
}

export const appConfig: AppConfig = {
  cmcKey: process.env.COIN_MARKET_CAP_KEY || "",
  authApiBase: "",
  nftApiBase: "",
  cryptoCurrencyApiBase: "",
  dagwaApiBase: process.env.IS_LOCAL ? "http://localhost:23223" : "",
  cmcApiBase: "https://sandbox-api.coinmarketcap.com/v1",
  covalentApiBase: "https://api.covalenthq.com/v1",
  chainApiBase: "https://chainid.network",
  chainTvlsApiBase: "https://api.llama.fi",
  balancesApiBase: "",
  covalentKey: process.env.COVALENT_KEY || "",
  sampleWalletAddress: process.env.SAMPLE_WALLET_ADDRESS || "",
  accessToken: "",
}

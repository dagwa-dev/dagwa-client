process.env.COIN_MARKET_CAP_KEY
type AppConfig = {
  // third-party
  cmcKey: string
  cmcApiBase: string
  covalentKey: string
  covalentApiBase: string
  chainNetworkApiBase: string
  chainTvlsApiBase: string
  // service
  accessToken: string
  serviceApiBase: string
  chainApiBase: string
  dAppApiBase: string
  subscriberApiBase: string
}

export const appConfig: AppConfig = {
  // third-party
  cmcKey: `${process.env.COIN_MARKET_CAP_KEY || ""}`,
  cmcApiBase: "https://sandbox-api.coinmarketcap.com/v1",
  covalentKey: `${process.env.COVALENT_KEY || ""}`,
  covalentApiBase: "https://api.covalenthq.com/v1",
  chainNetworkApiBase: "https://chainid.network",
  chainTvlsApiBase: "https://api.llama.fi",
  // service
  accessToken: "",
  serviceApiBase: "https://dagwa-api.up.railway.app",
  chainApiBase: "/chain",
  dAppApiBase: "/d_app",
  subscriberApiBase: "/subscriber",
}

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
}

export const appConfig: AppConfig = {
  // third-party
  cmcKey: `${process.env.COIN_MARKET_CAP_KEY || ""}`,
  cmcApiBase: `${process.env.CMC_ENDPOINT || ""}`,
  covalentKey: `${process.env.COVALENT_KEY || ""}`,
  covalentApiBase: `${process.env.COVALENT_ENDPOINT || ""}`,
  chainNetworkApiBase: `${process.env.CHAIN_NETWORK_ENDPOINT || ""}`,
  chainTvlsApiBase: `${process.env.LLAMAFI_ENDPOINT || ""}`,
  // service
  accessToken: "",
  serviceApiBase: `${process.env.SERVICE_ENDPOINT || "http://localhost"}`,
  chainApiBase: "/chain",
  dAppApiBase: "/d_app",
}

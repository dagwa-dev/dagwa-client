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

const envToStr = (env?: string) => String(env)
const envToBool = (env?: string) => Boolean(env)

export const appConfig: AppConfig = {
  // third-party
  cmcKey: envToStr(process.env.COIN_MARKET_CAP_KEY),
  cmcApiBase: envToStr(process.env.CMC_ENDPOINT),
  covalentKey: envToStr(process.env.COVALENT_KEY),
  covalentApiBase: envToStr(process.env.COVALENT_ENDPOINT),
  chainNetworkApiBase: envToStr(process.env.CHAIN_NETWORK_ENDPOINT),
  chainTvlsApiBase: envToStr(process.env.LLAMAFI_ENDPOINT),
  // service
  accessToken: "",
  serviceApiBase: envToBool(process.env.IS_LOCAL)
    ? envToStr(process.env.SERVICE_ENDPOINT)
    : "http://localhost",
  chainApiBase: "/chain",
  dAppApiBase: "/d_app",
  subscriberApiBase: "/subscriber",
}

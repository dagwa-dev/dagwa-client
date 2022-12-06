import { appConfig } from "api/appConfig"
import { ApiConfiguration } from "api/axios/AxiosApiConfiguration"
import CMCApiClient from "api/cmc/CMCApiClient"
import CurrencyApiClient from "api/currencies/CurrenciesApiClient"

import { CurrenciesService } from "./CurrenciesService"

// currencies
const currenciesApiConfig = new ApiConfiguration()
currenciesApiConfig.accessToken = appConfig.cmcKey
const currenciesApiClient = new CurrencyApiClient(
  new CMCApiClient(currenciesApiConfig),
)
export const currenciesService = new CurrenciesService(currenciesApiClient)

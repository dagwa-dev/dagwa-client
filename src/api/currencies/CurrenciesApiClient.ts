import { appConfig } from "api/appConfig"
import { IAxiosApiClient } from "api/axios/interface"

import { ICurrenciesApiClient } from "./interface"

export default class CurrenciesApiClient implements ICurrenciesApiClient {
  apiBase: string
  currencyApiClient: IAxiosApiClient

  constructor(currencyApiClient: IAxiosApiClient) {
    this.apiBase = appConfig.cmcApiBase
    this.currencyApiClient = currencyApiClient
  }

  getListingsLatest = () =>
    this.currencyApiClient.get(`cryptocurrency/listings/latest/`)
}

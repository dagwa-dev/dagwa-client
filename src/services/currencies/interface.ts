import { ICurrenciesApiClient } from "api/currencies/interface"

import { GetListingsLatest } from "./types"

export interface ICurrenciesService {
  readonly currenciesApiClient: ICurrenciesApiClient
  getListingsLatest: GetListingsLatest
}

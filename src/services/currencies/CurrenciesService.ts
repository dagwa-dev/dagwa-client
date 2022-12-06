import { ICurrenciesApiClient } from "api/currencies/interface"

import { ICurrenciesService } from "./interface"
import { GetListingsLatest } from "./types"

export class CurrenciesService implements ICurrenciesService {
  readonly currenciesApiClient

  constructor(currenciesApiClient: ICurrenciesApiClient) {
    this.currenciesApiClient = currenciesApiClient
  }

  getListingsLatest: GetListingsLatest = () => {
    return this.currenciesApiClient.getListingsLatest()
  }
}

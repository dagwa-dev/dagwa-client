import { appConfig } from "api/appConfig"
import { ApiConfiguration } from "api/axios/AxiosApiConfiguration"
import CovalentApiClient from "api/covalent/CovalentApiClient"
import TransactionsApiClient from "api/transactions/TransactionsApiClient"

import { TransactionsService } from "./TransactionsService"

// transactions
const transactionsApiConfig = new ApiConfiguration()
transactionsApiConfig.accessToken = appConfig.covalentKey
const transactionsApiClient = new TransactionsApiClient(
  new CovalentApiClient(transactionsApiConfig),
)
export const transactionsService = new TransactionsService(
  transactionsApiClient,
)

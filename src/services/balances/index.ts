import { appConfig } from "api/appConfig"
import { ApiConfiguration } from "api/axios/AxiosApiConfiguration"
import BalancesApiClient from "api/balances/BalancesApiClient"
import CovalentApiClient from "api/covalent/CovalentApiClient"

import { BalancesService } from "./BalancesService"

// balances
const balancesApiConfig = new ApiConfiguration()
balancesApiConfig.accessToken = appConfig.covalentKey
const balancesApiClient = new BalancesApiClient(
  new CovalentApiClient(balancesApiConfig),
)
export const balancesService = new BalancesService(balancesApiClient)

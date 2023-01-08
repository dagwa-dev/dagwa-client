import { appConfig } from "api/appConfig"
import AxiosApiClient from "api/axios/AxiosApiClient"
import { ApiConfiguration } from "api/axios/AxiosApiConfiguration"
import DAppApiClient from "api/dApp/DAppApiClient"

import { DAppService } from "./DAppService"

// dApp
const dAppApiConfig = new ApiConfiguration(appConfig.serviceApiBase)
const dAppApiClient = new DAppApiClient(new AxiosApiClient(dAppApiConfig))
export const dAppService = new DAppService(dAppApiClient)

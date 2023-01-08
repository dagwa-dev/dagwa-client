import { appConfig } from "api/appConfig"
import AxiosApiClient from "api/axios/AxiosApiClient"
import { ApiConfiguration } from "api/axios/AxiosApiConfiguration"
import ChainApiClient from "api/chain/ChainApiClient"

import { ChainService } from "./ChainService"

// chain
const chainApiConfig = new ApiConfiguration(appConfig.serviceApiBase)
const chainApiClient = new ChainApiClient(new AxiosApiClient(chainApiConfig))
export const chainService = new ChainService(chainApiClient)

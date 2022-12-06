import { appConfig } from "api/appConfig"
import { ApiConfiguration } from "api/axios/AxiosApiConfiguration"
import BaseApiClient from "api/base/BaseApiClient"
import CovalentApiClient from "api/covalent/CovalentApiClient"

import { BaseService } from "./BaseService"

// base
const baseApiConfig = new ApiConfiguration()
baseApiConfig.accessToken = appConfig.covalentKey
const baseApiClient = new BaseApiClient(new CovalentApiClient(baseApiConfig))
export const baseService = new BaseService(baseApiClient)

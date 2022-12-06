import AxiosApiClient from "api/axios/AxiosApiClient"
import { ApiConfiguration } from "api/axios/AxiosApiConfiguration"
import ChainsApiClient from "api/chains/ChainsApiClient"

import { ChainsService } from "./ChainsService"

// chains
const chainsApiConfig = new ApiConfiguration()
const chainsApiClient = new ChainsApiClient(new AxiosApiClient(chainsApiConfig))
export const chainsService = new ChainsService(chainsApiClient)

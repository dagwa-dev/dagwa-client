import { appConfig } from "api/appConfig"
import { ApiConfiguration } from "api/axios/AxiosApiConfiguration"
import CovalentApiClient from "api/covalent/CovalentApiClient"
import NFTsApiClient from "api/nfts/NFTsApiClient"

import { NFTsService } from "./NFTsService"

// nfts
const nftsApiConfig = new ApiConfiguration()
nftsApiConfig.accessToken = appConfig.covalentKey
const nftsApiClient = new NFTsApiClient(new CovalentApiClient(nftsApiConfig))
export const nftsService = new NFTsService(nftsApiClient)

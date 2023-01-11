import { serviceApiRequest } from "api/axios/AxiosApiClient"

import {
  GetAllChain,
  GetAllChainRes,
  GetOneChain,
  GetOneChainRes,
} from "./types"

export const getOneChain: GetOneChain = async (url) =>
  serviceApiRequest<GetOneChainRes>({
    url,
    method: "GET",
  })

export const getAllChain: GetAllChain = async (url, params) =>
  serviceApiRequest<GetAllChainRes>({ url, method: "GET", params })

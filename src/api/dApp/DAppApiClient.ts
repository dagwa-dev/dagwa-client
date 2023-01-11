import { serviceApiRequest } from "api/axios/AxiosApiClient"

import { GetAllDApp, GetAllDAppRes, GetOneDApp, GetOneDAppRes } from "./types"

export const getOneDApp: GetOneDApp = async (url) =>
  serviceApiRequest<GetOneDAppRes>({
    url,
    method: "GET",
  })

export const getAllDApp: GetAllDApp = async (url, params) =>
  serviceApiRequest<GetAllDAppRes>({ url, method: "GET", params })

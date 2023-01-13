import { serviceApiRequest } from "api/axios/AxiosApiClient"
import { AxiosError } from "axios"
// import { appConfig } from "libs/appConfig"
import useSWR, { SWRResponse } from "swr"

// const baseUrl = appConfig.serviceApiBase
const baseUrl = "/api"

export const useSWRQuery = <T = unknown, P = unknown>(
  keys: [key: string, p?: P],
  fetcher = ([url, extraArgument]: [string, P]) =>
    serviceApiRequest<T>({ url, params: extraArgument }),
): SWRResponse<T, AxiosError<T>> => {
  const swrKey = keys.map((key, i) =>
    i === 0 ? `${baseUrl}${String(key)}` : key,
  )

  return useSWR(swrKey, fetcher)
}

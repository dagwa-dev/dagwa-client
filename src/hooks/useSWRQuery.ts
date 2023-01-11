import { serviceApiRequest } from "api/axios/AxiosApiClient"
import { AxiosError } from "axios"
import { appConfig } from "libs/appConfig"
import useSWR, { SWRResponse } from "swr"

const baseUrl = appConfig.serviceApiBase

export const useSWRQuery = <T = unknown, P = unknown>(
  keys: string | [string, P],
  fetcher = (url: string, extraArgument?: any) =>
    serviceApiRequest<T>({ url, params: extraArgument }),
): SWRResponse<T, AxiosError<T>> => {
  const swrKey =
    typeof keys === "string"
      ? baseUrl + keys
      : keys.map((key, i) => (i === 0 ? baseUrl + String(key) : key))

  return useSWR(swrKey, fetcher)
}

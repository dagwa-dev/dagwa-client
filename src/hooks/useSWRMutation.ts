import { serviceApiRequest } from "api/axios/AxiosApiClient"
import { AxiosError } from "axios"
import { appConfig } from "libs/appConfig"
import useMutation, { SWRMutationResponse } from "swr/mutation"

const baseUrl = appConfig.serviceApiBase

export const useSWRMutation = <T = unknown, D = unknown>(
  path: string,
  fetcher = (url: string, extraArgument?: any) =>
    serviceApiRequest<T, D>({ url, data: extraArgument }),
): SWRMutationResponse<T, AxiosError<T, D>, D> => {
  const key = baseUrl + path

  return useMutation(key, fetcher)
}

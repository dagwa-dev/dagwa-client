import { AxiosError } from "axios"
import useMutation, { SWRMutationResponse } from "swr/mutation"

import { serviceApiRequest } from "~/api/axios/AxiosApiClient"
import { appConfig } from "~/libs/appConfig"

const baseUrl = appConfig.serviceApiBase

export const useSWRMutation = <T = unknown, D = unknown>(
  path: string,
  fetcher = (url: string, extraArgument?: any) =>
    serviceApiRequest<T, D>({ url, data: extraArgument }),
): SWRMutationResponse<T, AxiosError<T, D>, D> => {
  const key = `${baseUrl}${path}`

  return useMutation(key, fetcher)
}

import { appConfig } from "api/appConfig"
import axios from "axios"
import useMutation, { SWRMutationResponse } from "swr/mutation"

const baseUrl = appConfig.serviceApiBase

export const useSWRMutation = <D = unknown, E = unknown>(
  path: string,
  fetcher = (url: string, options: Readonly<{ arg: unknown }>) =>
    axios.request<D>({ url, data: options.arg }).then((res) => res.data),
): SWRMutationResponse<D, E> => {
  const key = baseUrl + path

  return useMutation<D, E>(key, fetcher)
}

import { appConfig } from "api/appConfig"
import axios from "axios"
import useSWR, { SWRResponse } from "swr"

const baseUrl = appConfig.serviceApiBase

export const useSWRQuery = <D = unknown, E = unknown>(
  path: string,
  fetcher = (url: string) => axios.get<D>(url).then((res) => res.data),
): SWRResponse<D, E> => {
  const key = baseUrl + path

  return useSWR<D, E>(key, fetcher)
}

import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { appConfig } from "libs/appConfig"

import { ApiConfig } from "./AxiosApiConfig"
import { handleServiceError } from "./AxiosApiServiceErrors"

const createAxiosClient = (apiConfig: ApiConfig): AxiosInstance =>
  Axios.create({
    // baseURL: apiConfig.baseUrl,
    responseType: "json" as const,
    headers: {
      "Content-Type": "application/json",
      ...(apiConfig.accessToken && {
        Authorization: `Bearer ${apiConfig.accessToken}`,
      }),
    },
    timeout: 10 * 1000,
  })

const subscriberApiConfig = new ApiConfig(appConfig.serviceApiBase)
const axiosClient = createAxiosClient(subscriberApiConfig)

export const serviceApiRequest = async <T = unknown, D = unknown>(
  config: AxiosRequestConfig<D>,
): Promise<T> => {
  try {
    const res = await axiosClient.request<T, AxiosResponse<T, D>, D>(config)
    console.info(res.status)
    return res.data
  } catch (error) {
    handleServiceError(error)
  }
  return {} as T
}

import { appConfig } from "api/appConfig"
import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

import { ApiConfiguration } from "./AxiosApiConfiguration"
import { handleServiceError } from "./AxiosApiServiceErrors"
import { IAxiosApiClient } from "./interface"

export default class AxiosApiClient implements IAxiosApiClient {
  private client: AxiosInstance

  protected createAxiosClient(
    apiConfiguration: ApiConfiguration,
  ): AxiosInstance {
    return Axios.create({
      baseURL: appConfig.authApiBase,
      responseType: "json" as const,
      headers: {
        "Content-Type": "application/json",
        ...(apiConfiguration.accessToken && {
          Authorization: `Bearer ${apiConfiguration.accessToken}`,
        }),
      },
      timeout: 10 * 1000,
    })
  }

  constructor(apiConfiguration: ApiConfiguration) {
    this.client = this.createAxiosClient(apiConfiguration)
  }

  async post<T = any, D = any>(
    path: string,
    payload: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<T> {
    try {
      const response = await this.client.post<T, AxiosResponse<T, D>, D>(
        path,
        payload,
        config,
      )
      return response.data
    } catch (error) {
      handleServiceError(error)
    }
    return {} as T
  }

  async patch<T = any, D = any>(
    path: string,
    payload: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<T> {
    try {
      const response = await this.client.patch<T, AxiosResponse<T, D>, D>(
        path,
        payload,
        config,
      )
      return response.data
    } catch (error) {
      handleServiceError(error)
    }
    return {} as T
  }

  async put<T = any, D = any>(
    path: string,
    payload: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<T> {
    try {
      const response = await this.client.put<T, AxiosResponse<T, D>, D>(
        path,
        payload,
        config,
      )
      return response.data
    } catch (error) {
      handleServiceError(error)
    }
    return {} as T
  }

  async get<T = any, D = any>(
    path: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<T> {
    try {
      const response = await this.client.get<T, AxiosResponse<T, D>, D>(
        path,
        config,
      )
      return response.data
    } catch (error) {
      handleServiceError(error)
    }
    return {} as T
  }
}

import { appConfig } from "api/appConfig"
import AxiosApiClient from "api/axios/AxiosApiClient"
import { ApiConfiguration } from "api/axios/AxiosApiConfiguration"
import Axios, { AxiosInstance } from "axios"

export default class CovalentApiClient extends AxiosApiClient {
  protected override createAxiosClient(
    apiConfiguration: ApiConfiguration,
  ): AxiosInstance {
    return Axios.create({
      baseURL: appConfig.covalentApiBase,
      responseType: "json" as const,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10 * 1000,
      params: {
        key: apiConfiguration.accessToken,
      },
    })
  }

  constructor(apiConfiguration: ApiConfiguration) {
    super(apiConfiguration)
  }
}

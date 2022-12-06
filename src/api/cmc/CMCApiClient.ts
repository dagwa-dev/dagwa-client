import { appConfig } from "api/appConfig"
import AxiosApiClient from "api/axios/AxiosApiClient"
import { ApiConfiguration } from "api/axios/AxiosApiConfiguration"
import Axios, { AxiosInstance } from "axios"

export default class CMCApiClient extends AxiosApiClient {
  protected override createAxiosClient(
    apiConfiguration: ApiConfiguration,
  ): AxiosInstance {
    return Axios.create({
      baseURL: appConfig.cmcApiBase,
      responseType: "json" as const,
      headers: {
        "Content-Type": "application/json",
        "X-CMC_PRO_API_KEY": apiConfiguration.accessToken,
      },
      timeout: 10 * 1000,
    })
  }

  constructor(apiConfiguration: ApiConfiguration) {
    super(apiConfiguration)
  }
}

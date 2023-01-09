import { appConfig } from "api/appConfig"
import { IAxiosApiClient } from "api/axios/interface"

import { ISubscriberApiClient } from "./interface"
import {
  CreateSubscriber,
  CreateSubscriberReq,
  CreateSubscriberRes,
} from "./types"

export default class SubscriberApiClient implements ISubscriberApiClient {
  apiBase: string
  apiClient: IAxiosApiClient

  constructor(apiClient: IAxiosApiClient) {
    this.apiBase = appConfig.subscriberApiBase
    this.apiClient = apiClient
  }

  createSubscriber: CreateSubscriber = async (email) =>
    this.apiClient.post<CreateSubscriberRes, CreateSubscriberReq>(
      this.apiBase,
      {
        data: { email },
      },
    )
}

import { ISubscriberApiClient } from "api/subscriber/interface"

import { ISubscriberService } from "./interface"
import { Subscription } from "./types"

export class SubscriberService implements ISubscriberService {
  readonly apiClient

  constructor(apiClient: ISubscriberApiClient) {
    this.apiClient = apiClient
  }

  subscription: Subscription = async (email) => {
    const result = await this.apiClient.createSubscriber(email)

    return result
  }
}

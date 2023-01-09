import { ISubscriberApiClient } from "api/subscriber/interface"

import { Subscription } from "./types"

export interface ISubscriberService {
  readonly apiClient: ISubscriberApiClient
  subscription: Subscription
}

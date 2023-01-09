import { appConfig } from "api/appConfig"
import AxiosApiClient from "api/axios/AxiosApiClient"
import { ApiConfiguration } from "api/axios/AxiosApiConfiguration"
import SubscriberApiClient from "api/subscriber/SubscriberApiClient"

import { SubscriberService } from "./SubscriberService"

// subscriber
const subscriberApiConfig = new ApiConfiguration(appConfig.serviceApiBase)
const subscriberApiClient = new SubscriberApiClient(
  new AxiosApiClient(subscriberApiConfig),
)
export const subscriberService = new SubscriberService(subscriberApiClient)

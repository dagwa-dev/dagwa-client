import { serviceApiRequest } from "api/axios/AxiosApiClient"

import {
  CreateSubscriber,
  CreateSubscriberReq,
  CreateSubscriberRes,
} from "./types"

export const createSubscriber: CreateSubscriber = async (url, data) =>
  serviceApiRequest<CreateSubscriberRes, CreateSubscriberReq>({
    url,
    method: "POST",
    data,
  })

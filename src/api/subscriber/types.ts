import { RequestConfig } from "api/axios/types"
import { PageOptions } from "api/common/types"

// CreateSubscriber
export type CreateSubscriberReq = object
export type CreateSubscriberRes = Promise<object>
export type CreateSubscriberParams = PageOptions
export type CreateSubscriberConfig = RequestConfig<
  CreateSubscriberReq,
  CreateSubscriberParams
>
export type CreateSubscriber = (email: string) => CreateSubscriberRes

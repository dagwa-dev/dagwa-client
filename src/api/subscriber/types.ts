// CreateSubscriber
export type CreateSubscriberReq = { email: string }
export type CreateSubscriberRes = unknown
export type CreateSubscriber = (
  url: string,
  data: CreateSubscriberReq,
) => Promise<CreateSubscriberRes>

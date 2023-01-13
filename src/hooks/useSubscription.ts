import { createSubscriber } from "~/api/subscriber"
import {
  CreateSubscriberReq,
  CreateSubscriberRes,
} from "~/api/subscriber/types"

import { useSWRMutation } from "./useSWRMutation"

const subscriptionFetcher = (
  url: string,
  extraArgument: { arg: CreateSubscriberReq },
): Promise<CreateSubscriberRes> => createSubscriber(url, extraArgument.arg)

export const useSubscription = () =>
  useSWRMutation<CreateSubscriberRes, CreateSubscriberReq>(
    "/subscriber",
    subscriptionFetcher,
  )

// example
// const { trigger: createSubscriber } = useSubscription()
// createSubscriber({ email: "" })

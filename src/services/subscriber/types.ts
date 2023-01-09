import { CreateSubscriberRes } from "api/subscriber/types"

export type Subscription = (email: string) => CreateSubscriberRes

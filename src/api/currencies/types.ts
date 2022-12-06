import { RequestConfig } from "api/axios/types"

// Common Get Token Balances Method
export type CommonCMC_Method<C = any, R = any> = (config?: C) => Promise<R>

// Get Listings Latest
export type GetListingsLatestReq = object
export type GetListingsLatestRes = object
export type GetListingsLatestParams = {
  "page-number"?: number
  "page-size"?: number
}
export type GetListingsLatestConfig = RequestConfig<
  GetListingsLatestRes,
  GetListingsLatestParams
>
export type GetListingsLatest = CommonCMC_Method<
  GetListingsLatestConfig,
  GetListingsLatestRes
>

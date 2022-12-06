import { RequestMethod } from "./types"

export interface IAxiosApiClient {
  post: RequestMethod
  patch: RequestMethod
  put: RequestMethod
  get: RequestMethod
}

import { appConfig } from "api/appConfig"
import { IAxiosApiClient } from "api/axios/interface"

import { IDAppApiClient } from "./interface"
import {
  GetAllDApp,
  GetAllDAppReq,
  GetAllDAppRes,
  GetOneDApp,
  GetOneDAppReq,
  GetOneDAppRes,
} from "./types"

export default class DAppApiClient implements IDAppApiClient {
  apiBase: string
  DAppApiClient: IAxiosApiClient

  constructor(DAppApiClient: IAxiosApiClient) {
    this.apiBase = appConfig.dAppApiBase
    this.DAppApiClient = DAppApiClient
  }

  getOne: GetOneDApp = async (id) =>
    this.DAppApiClient.get<GetOneDAppRes, GetOneDAppReq>(
      `${this.apiBase}/${id}`,
    )

  getAll: GetAllDApp = async (config) =>
    this.DAppApiClient.get<GetAllDAppRes, GetAllDAppReq>(this.apiBase, config)
}

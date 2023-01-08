import { IDAppApiClient } from "api/dApp/interface"

import { GetDApp, GetDApps } from "./types"

export interface IDAppService {
  readonly apiClient: IDAppApiClient
  getDApp: GetDApp
  getDApps: GetDApps
}

import { IDAppApiClient } from "api/dApp/interface"

import { IDAppService } from "./interface"
import { GetDApp, GetDApps } from "./types"

export class DAppService implements IDAppService {
  readonly apiClient

  constructor(apiClient: IDAppApiClient) {
    this.apiClient = apiClient
  }

  getDApp: GetDApp = async (chainId) => {
    const result = await this.apiClient.getOne(chainId)

    return result
  }

  getDApps: GetDApps = async (params) => {
    const result = await this.apiClient.getAll({ params })

    return result
  }
}

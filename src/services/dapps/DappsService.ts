import { getDapp, getDappList, getDappListWithChain } from "utils/dapps"

import { IDappsService } from "./interface"
import { GetDapp, GetDapps, GetDappsWithChain } from "./types"

export class DappsService implements IDappsService {
  getDapp: GetDapp = (dappId) => {
    return getDapp(dappId)
  }

  getDapps: GetDapps = () => {
    return getDappList()
  }

  getDappsWithChain: GetDappsWithChain = (chainId: string) => {
    return getDappListWithChain(chainId)
  }
}

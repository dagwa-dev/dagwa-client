import { PageOptions } from "api/common/types"
import { GetAllDAppRes, GetOneDAppRes } from "api/dApp/types"

export type GetDApp = (id: string) => GetOneDAppRes
export type GetDApps = (params: PageOptions) => GetAllDAppRes

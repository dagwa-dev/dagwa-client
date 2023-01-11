import { PageOptions, PageResult } from "api/common/types"
import { DApp } from "models/dApp"

// GetOneDApp
export type GetOneDAppRes = DApp
export type GetOneDApp = (url: string) => Promise<GetOneDAppRes>
// GetAllDApp
export type GetAllDAppRes = PageResult<DApp>
export type GetAllDAppParams = PageOptions
export type GetAllDApp = (
  url: string,
  params: GetAllDAppParams,
) => Promise<GetAllDAppRes>

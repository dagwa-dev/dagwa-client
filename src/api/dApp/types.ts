import { RequestConfig } from "api/axios/types"
import { PageOptions, PageResultAsync } from "api/common/types"
import { DApp } from "models/dApp"

// GetOneDApp
export type GetOneDAppReq = object
export type GetOneDAppRes = Promise<DApp>
export type GetOneDApp = (id: string) => GetOneDAppRes
// GetAllDApp
export type GetAllDAppReq = object
export type GetAllDAppRes = PageResultAsync<DApp>
export type GetAllDAppParams = PageOptions
export type GetAllDAppConfig = RequestConfig<GetAllDAppReq, GetAllDAppParams>
export type GetAllDApp = (config: GetAllDAppConfig) => GetAllDAppRes

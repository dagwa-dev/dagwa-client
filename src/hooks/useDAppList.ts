import { getAllDApp } from "api/dApp/DAppApiClient"
import { GetAllDAppParams, GetAllDAppRes } from "api/dApp/types"

import { useSWRQuery } from "./useSWRQuery"

const getAllDAppFetcher = (
  url: string,
  extraArgument: GetAllDAppParams,
): Promise<GetAllDAppRes> => getAllDApp(url, extraArgument)

export const useDAppList = (params: GetAllDAppParams) => {
  const { data, error } = useSWRQuery<GetAllDAppRes, GetAllDAppParams>(
    ["d_app", params],
    getAllDAppFetcher,
  )

  const loading = !data && !error
  const loggedOut = error && error.status === 403

  return {
    loading,
    loggedOut,
    dAppList: data,
  }
}

import { getOneDApp } from "api/dApp/DAppApiClient"
import { GetOneDAppRes } from "api/dApp/types"

import { useSWRQuery } from "./useSWRQuery"
const getOneDAppFetcher = ([url]: [string, unknown]): Promise<GetOneDAppRes> =>
  getOneDApp(url)

export const useDApp = (ulid: string) => {
  const { data, error } = useSWRQuery<GetOneDAppRes>(
    [`/d_app/${ulid}`],
    getOneDAppFetcher,
  )

  const loading = !data && !error
  const loggedOut = error && error.status === 403

  return {
    loading,
    loggedOut,
    dApp: data,
  }
}

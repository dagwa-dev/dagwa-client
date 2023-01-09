import { PageResult } from "api/common/types"
import { AxiosError } from "axios"
import { DApp } from "models/dApp"

import { useSWRQuery } from "./useSWRQuery"

export const useDAppList = () => {
  const { data, error } = useSWRQuery<PageResult<DApp>, AxiosError>("d_app")

  const loading = !data && !error
  const loggedOut = error && error.status === 403

  return {
    loading,
    loggedOut,
    dApps: data,
  }
}

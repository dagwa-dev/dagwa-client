import { AxiosError } from "axios"
import { DApp } from "models/dApp"

import { useSWRQuery } from "./useSWRQuery"

export const useDApp = (id: string) => {
  const { data, error } = useSWRQuery<DApp, AxiosError>(`d_app/${id}`)

  const loading = !data && !error
  const loggedOut = error && error.status === 403

  return {
    loading,
    loggedOut,
    dApp: data,
  }
}

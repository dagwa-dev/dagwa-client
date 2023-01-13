import { GetOneDAppRes } from "~/api/dApp/types"

import { useSWRQuery } from "./useSWRQuery"

export const useDApp = (ulid: string) => {
  const { data, error } = useSWRQuery<GetOneDAppRes>([`/d_app/${ulid}`])

  const loading = !data && !error
  const loggedOut = error && error.status === 403

  return {
    loading,
    loggedOut,
    dApp: data,
  }
}

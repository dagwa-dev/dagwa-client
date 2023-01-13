import { GetOneChainRes } from "api/chain/types"

import { useSWRQuery } from "./useSWRQuery"

export const useChain = (id: string) => {
  const { data, error } = useSWRQuery<GetOneChainRes>([`/chain/${id}`])

  const loading = !data && !error
  const loggedOut = error && error.status === 403

  return {
    loading,
    loggedOut,
    chain: data,
  }
}

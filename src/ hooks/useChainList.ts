import { PageResult } from "api/common/types"
import { AxiosError } from "axios"
import { Chain } from "models/chain"

import { useSWRQuery } from "./useSWRQuery"

export const useChainList = () => {
  const { data, error } = useSWRQuery<PageResult<Chain>, AxiosError>("chain")

  const loading = !data && !error
  const loggedOut = error && error.status === 403

  return {
    loading,
    loggedOut,
    chains: data,
  }
}

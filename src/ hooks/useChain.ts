import { AxiosError } from "axios"
import { Chain } from "models/chain"

import { useSWRQuery } from "./useSWRQuery"

export const useChain = (id: string) => {
  const { data, error } = useSWRQuery<Chain, AxiosError>(`chain/${id}`)

  const loading = !data && !error
  const loggedOut = error && error.status === 403

  return {
    loading,
    loggedOut,
    chain: data,
  }
}

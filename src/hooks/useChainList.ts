import { getAllChain } from "~/api/chain"
import { GetAllChainParams, GetAllChainRes } from "~/api/chain/types"

import { useSWRQuery } from "./useSWRQuery"

const getAllChainFetcher = ([url, extraArgument]: [
  string,
  GetAllChainParams,
]): Promise<GetAllChainRes> => getAllChain(url, extraArgument)

export const useChainList = (params: GetAllChainParams) => {
  const { data, error } = useSWRQuery<GetAllChainRes, GetAllChainParams>(
    ["/chain", params],
    getAllChainFetcher,
  )

  const loading = !data && !error
  const loggedOut = error && error.status === 403

  return {
    loading,
    loggedOut,
    chains: data,
  }
}

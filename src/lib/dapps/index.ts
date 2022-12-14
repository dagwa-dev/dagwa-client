import { dappList } from "./constants"

export const getDapp = (dappId: string) => {
  return dappList.find((value) => value.dappId === dappId)
}

export const getDappList = () => {
  return dappList
}

export const getDappListWithChain = (chainId: string) => {
  return dappList.filter((dapp) => dapp.chainIds.includes(chainId))
}

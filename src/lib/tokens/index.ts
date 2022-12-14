import { tokenList } from "./constants"

export const getToken = (ticker: string) => {
  const duplicatesRemovedTokenList = tokenList.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.ticker === value.ticker),
  )
  return duplicatesRemovedTokenList.find(
    (value) => value.ticker.toLowerCase() === ticker.toLowerCase(),
  )
}

export const getTokenList = (chainId?: string) => {
  if (!chainId)
    return tokenList.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.ticker === value.ticker),
    )
  const tokenListByChainId = tokenList.filter(
    (value) => value.type === "currency" && value.chainId === chainId,
  )
  return tokenListByChainId
}

export const getTokenListWithTags = (tag: string) =>
  tokenList.filter((value) => value.tags.includes(tag))

export const getSmartContractSortingKey = (v?: string) => {
  if (v) {
    if (/\bgovernance/.test(v)) {
      return 1
    }
    if (/\butility/.test(v)) {
      return 2
    }
  }
  return 3
}

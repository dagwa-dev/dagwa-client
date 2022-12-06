import { getToken, getTokenList } from "utils/tokens"

import { ITokensService } from "./interface"

export class TokensService implements ITokensService {
  getToken(ticker: string) {
    return getToken(ticker)
  }

  getTokensByChain(chainId?: string) {
    return getTokenList(chainId)
  }

  getTokens() {
    return getTokenList()
  }
}

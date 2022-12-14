import { Token } from "lib/tokens/types"

export interface ITokensService {
  getToken(ticker: string): Token | undefined
  getTokensByChain(chainId?: string): Token[]
}

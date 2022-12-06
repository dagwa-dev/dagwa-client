import { Token } from "utils/tokens/types"

export interface ITokensService {
  getToken(ticker: string): Token | undefined
  getTokensByChain(chainId?: string): Token[]
}

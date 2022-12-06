import { GetTransaction, GetTransactionsForAddress } from "./types"

export interface ITransactionsApiClient {
  getTransactionsForAddress: GetTransactionsForAddress
  getTransaction: GetTransaction
}

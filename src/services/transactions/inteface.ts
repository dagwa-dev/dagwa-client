import { ITransactionsApiClient } from "api/transactions/interface"

import { GetTransaction, GetTransactionsForAddress } from "./types"

export interface ITransactionsService {
  readonly transactionsApiClient: ITransactionsApiClient
  getTransaction: GetTransaction
  getTransactionsForAddress: GetTransactionsForAddress
}

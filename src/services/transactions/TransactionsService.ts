import { ITransactionsApiClient } from "api/transactions/interface"

import { ITransactionsService } from "./inteface"
import { GetTransaction, GetTransactionsForAddress } from "./types"

export class TransactionsService implements ITransactionsService {
  readonly transactionsApiClient

  constructor(transactionsApiClient: ITransactionsApiClient) {
    this.transactionsApiClient = transactionsApiClient
  }

  getTransaction: GetTransaction = async (chainId, walletAddress, params) => {
    const data = await this.transactionsApiClient.getTransaction(
      chainId,
      walletAddress,
      { params },
    )
    return data.data
  }

  getTransactionsForAddress: GetTransactionsForAddress = async (
    chainId,
    txHash,
    params,
  ) => {
    const data = await this.transactionsApiClient.getTransactionsForAddress(
      chainId,
      txHash,
      { params },
    )
    return data.data
  }
}

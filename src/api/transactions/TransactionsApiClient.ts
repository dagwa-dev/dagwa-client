import { appConfig } from "api/appConfig"
import { IAxiosApiClient } from "api/axios/interface"

import { ITransactionsApiClient } from "./interface"
import {
  GetTransaction,
  GetTransactionReq,
  GetTransactionRes,
  GetTransactionsForAddress,
  GetTransactionsForAddressReq,
  GetTransactionsForAddressRes,
} from "./types"

export default class TransactionsApiClient implements ITransactionsApiClient {
  apiBase: string
  nftApiClient: IAxiosApiClient

  constructor(nftApiClient: IAxiosApiClient) {
    this.apiBase = appConfig.nftApiBase
    this.nftApiClient = nftApiClient
  }

  getTransaction: GetTransaction = async (chainId, walletAddress, config) =>
    this.nftApiClient.get<GetTransactionRes, GetTransactionReq>(
      `${chainId}/address/${walletAddress}/transactions_v2/`,
      config,
    )

  getTransactionsForAddress: GetTransactionsForAddress = async (
    chainId,
    txHash,
    config,
  ) =>
    this.nftApiClient.get<
      GetTransactionsForAddressRes,
      GetTransactionsForAddressReq
    >(`${chainId}/transaction_v2/${txHash}/`, config)
}

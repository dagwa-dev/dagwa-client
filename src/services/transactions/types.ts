import {
  GetTransactionParams,
  GetTransactionsForAddressParams,
} from "api/transactions/types"

export type GetTransaction = (
  chainId: string,
  walletAddress: string,
  params?: GetTransactionParams,
) => Promise<object | undefined>

export type GetTransactionsForAddress = (
  chainId: string,
  txHash: string,
  params?: GetTransactionsForAddressParams,
) => Promise<object | undefined>

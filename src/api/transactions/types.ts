import { RequestConfig } from "api/axios/types"
import { CovalentParams, CovalentRes } from "api/covalent/types"

type GetTransactionMethod<C = any, R = any> = (
  chainId: string,
  walletAddress: string,
  config?: C,
) => Promise<R>

type GetTransactionsForAddressMethod<C = any, R = any> = (
  chainId: string,
  txHash: string,
  config?: C,
) => Promise<R>

// GetTransaction
export type GetTransactionReq = object
export type GetTransactionRes = CovalentRes<object>
export type GetTransactionParams = CovalentParams<{
  "page-number"?: number
  "page-size"?: number
}>
export type GetTransactionConfig = RequestConfig<
  GetTransactionRes,
  GetTransactionParams
>
export type GetTransaction = GetTransactionMethod<
  GetTransactionConfig,
  GetTransactionRes
>

// GetTransactionsForAddress
export type GetTransactionsForAddressReq = object
export type GetTransactionsForAddressRes = CovalentRes<object>
export type GetTransactionsForAddressParams = CovalentParams<{
  tokenId?: string
}>
export type GetTransactionsForAddressConfig = RequestConfig<
  GetTransactionsForAddressRes,
  GetTransactionsForAddressParams
>
export type GetTransactionsForAddress = GetTransactionsForAddressMethod<
  GetTransactionsForAddressConfig,
  GetTransactionsForAddressRes
>

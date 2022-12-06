import { RequestConfig } from "api/axios/types"
import { CovalentParams, CovalentRes } from "api/covalent/types"

type CommonGetNFTsMethodWithToken<C = any, R = any> = (
  chainId: string,
  contractAddress: string,
  tokenId: string,
  config?: C,
) => Promise<R>

type CommonGetNFTsMethod<C = any, R = any> = (
  chainId: string,
  contractAddress: string,
  config?: C,
) => Promise<R>

export type NFTsItem = {
  contract_decimals: number
  contract_name: string
  contract_ticker_symbol: string
  contract_address: string
  supports_erc: string | null
  logo_url: string
  token_id: string
}

type CovalentPagination = {
  has_more: boolean
  page_number: number
  page_size: number
  total_count: number
}

export type NFT = {
  updated_at: string
  items: NFTsItem[]
  pagination: CovalentPagination
}

// Get NFT IDs For Contract
export type GetNFTsIDsForContractReq = object
export type GetNFTsIDsForContractRes = CovalentRes<NFT>
export type GetNFTsIDsForContractParams = CovalentParams<{
  "page-number"?: number
  "page-size"?: number
}>
export type GetNFTsIDsForContractConfig = RequestConfig<
  GetNFTsIDsForContractRes,
  GetNFTsIDsForContractParams
>
export type GetNFTsIDsForContract = CommonGetNFTsMethod<
  GetNFTsIDsForContractConfig,
  GetNFTsIDsForContractRes
>

// GetNFTsTransactionsForContract
export type GetNFTsTransactionsForContractReq = object
export type GetNFTsTransactionsForContractRes = CovalentRes<object>
export type GetNFTsTransactionsForContractParams = CovalentParams<{
  tokenId?: string
}>
export type GetNFTsTransactionsForContractConfig = RequestConfig<
  GetNFTsTransactionsForContractRes,
  GetNFTsTransactionsForContractParams
>
export type GetNFTsTransactionsForContract = CommonGetNFTsMethodWithToken<
  GetNFTsTransactionsForContractConfig,
  GetNFTsTransactionsForContractRes
>

// GetNFTsExternalMetadataForContract
export type GetNFTsExternalMetadataForContractReq = object
export type GetNFTsExternalMetadataForContractRes = CovalentRes<object>
export type GetNFTsExternalMetadataForContractParams = CovalentParams
export type GetNFTsExternalMetadataForContractConfig = RequestConfig<
  GetNFTsExternalMetadataForContractRes,
  GetNFTsExternalMetadataForContractParams
>
export type GetNFTsExternalMetadataForContract = CommonGetNFTsMethodWithToken<
  GetNFTsExternalMetadataForContractConfig,
  GetNFTsExternalMetadataForContractRes
>

import { appConfig } from "api/appConfig"
import { IAxiosApiClient } from "api/axios/interface"

import { INFTsApiClient } from "./interface"
import {
  GetNFTsExternalMetadataForContract,
  GetNFTsExternalMetadataForContractReq,
  GetNFTsExternalMetadataForContractRes,
  GetNFTsIDsForContract,
  GetNFTsIDsForContractReq,
  GetNFTsIDsForContractRes,
  GetNFTsTransactionsForContract,
  GetNFTsTransactionsForContractReq,
  GetNFTsTransactionsForContractRes,
} from "./types"

export default class NFTsApiClient implements INFTsApiClient {
  apiBase: string
  nftApiClient: IAxiosApiClient

  constructor(nftApiClient: IAxiosApiClient) {
    this.apiBase = appConfig.nftApiBase
    this.nftApiClient = nftApiClient
  }

  getNFTsIDsForContract: GetNFTsIDsForContract = async (
    chainId,
    contractAddress,
    config,
  ) =>
    this.nftApiClient.get<GetNFTsIDsForContractRes, GetNFTsIDsForContractReq>(
      `${chainId}/tokens/${contractAddress}/nft_token_ids/`,
      config,
    )

  getNFTsTransactionsForContract: GetNFTsTransactionsForContract = async (
    chainId,
    contractAddress,
    tokenId,
    config,
  ) =>
    this.nftApiClient.get<
      GetNFTsTransactionsForContractRes,
      GetNFTsTransactionsForContractReq
    >(
      `${chainId}/tokens/${contractAddress}/nft_transactions/${tokenId}/`,
      config,
    )

  getNFTsExternalMetadataForContract: GetNFTsExternalMetadataForContract =
    async (chainId, contractAddress, tokenId, config) =>
      this.nftApiClient.get<
        GetNFTsExternalMetadataForContractRes,
        GetNFTsExternalMetadataForContractReq
      >(`${chainId}/tokens/${contractAddress}/nft_metadata/${tokenId}/`, config)
}

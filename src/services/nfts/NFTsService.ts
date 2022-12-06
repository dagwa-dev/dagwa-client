import { INFTsApiClient } from "api/nfts/interface"

import { INFTsService } from "./interface"
import {
  GetNFTsExternalMetadataForContract,
  GetNFTsIDsForContract,
  GetNFTsTransactionsForContract,
} from "./types"

export class NFTsService implements INFTsService {
  readonly nftApiClient

  constructor(nftApiClient: INFTsApiClient) {
    this.nftApiClient = nftApiClient
  }

  getNFTsIDsForContract: GetNFTsIDsForContract = async (
    chainId,
    contractAddress,
    params,
  ) => {
    const data = await this.nftApiClient.getNFTsIDsForContract(
      chainId,
      contractAddress,
      {
        params,
      },
    )
    return data.data
  }

  getNFTsTransactionsForContract: GetNFTsTransactionsForContract = async (
    chainId,
    contractAddress,
    tokenId,
    params,
  ) => {
    const data = await this.nftApiClient.getNFTsTransactionsForContract(
      chainId,
      contractAddress,
      tokenId,
      { params },
    )
    return data.data
  }

  getNFTsExternalMetadataForContract: GetNFTsExternalMetadataForContract =
    async (chainId, contractAddress, tokenId, params) => {
      const data = await this.nftApiClient.getNFTsExternalMetadataForContract(
        chainId,
        contractAddress,
        tokenId,
        { params },
      )
      return data.data
    }
}

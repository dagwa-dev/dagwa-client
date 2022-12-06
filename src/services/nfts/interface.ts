import { INFTsApiClient } from "api/nfts/interface"

import {
  GetNFTsExternalMetadataForContract,
  GetNFTsIDsForContract,
  GetNFTsTransactionsForContract,
} from "./types"

export interface INFTsService {
  readonly nftApiClient: INFTsApiClient
  getNFTsIDsForContract: GetNFTsIDsForContract
  getNFTsTransactionsForContract: GetNFTsTransactionsForContract
  getNFTsExternalMetadataForContract: GetNFTsExternalMetadataForContract
}

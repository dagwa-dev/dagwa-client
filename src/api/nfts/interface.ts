import {
  GetNFTsExternalMetadataForContract,
  GetNFTsIDsForContract,
  GetNFTsTransactionsForContract,
} from "./types"

export interface INFTsApiClient {
  getNFTsIDsForContract: GetNFTsIDsForContract
  getNFTsTransactionsForContract: GetNFTsTransactionsForContract
  getNFTsExternalMetadataForContract: GetNFTsExternalMetadataForContract
}

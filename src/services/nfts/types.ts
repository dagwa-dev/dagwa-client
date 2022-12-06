import { GetNFTsIDsForContractParams, NFT } from "api/nfts/types"

export type GetNFTsIDsForContract = (
  chainId: string,
  contractAddress: string,
  params?: GetNFTsIDsForContractParams,
) => Promise<NFT>

export type GetNFTsTransactionsForContract = (
  chainId: string,
  contractAddress: string,
  tokenId: string,
  params?: GetNFTsIDsForContractParams,
) => Promise<object>

export type GetNFTsExternalMetadataForContract = (
  chainId: string,
  contractAddress: string,
  tokenId: string,
  params?: GetNFTsIDsForContractParams,
) => Promise<object>

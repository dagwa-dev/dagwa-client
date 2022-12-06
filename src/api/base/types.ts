import { RequestConfig } from "api/axios/types"
import { CovalentParams, CovalentRes } from "api/covalent/types"

type GetBlockMethod<C = any, R = any> = (
  chainId: string,
  blockHeight: string,
  config?: C,
) => Promise<R>

type GetBlockHeightMethod<C = any, R = any> = (
  chainId: string,
  startDate: string, // 2021-01-01
  endDate: string, // 2021-12-31
  config?: C,
) => Promise<R>

type GetLogEventByContractMethod<C = any, R = any> = (
  chainId: string,
  contractAddress: string,
  config?: C,
) => Promise<R>

type GetLogEventByTopicMethod<C = any, R = any> = (
  chainId: string,
  topic: string, // topic hash(es)
  config?: C,
) => Promise<R>

type GetAllChainsMethod<C = any, R = any> = (config?: C) => Promise<R>

// GetBlock
export type GetBlockReq = object
export type GetBlockRes = CovalentRes<object>
export type GetBlockParams = CovalentParams<object>
export type GetBlockConfig = RequestConfig<GetBlockRes, GetBlockParams>
export type GetBlock = GetBlockMethod<GetBlockConfig, GetBlockRes>
// GetBlockHeight
export type GetBlockHeightReq = object
export type GetBlockHeightRes = CovalentRes<object>
export type GetBlockHeightParams = CovalentParams<{
  "page-number"?: number
  "page-size"?: number
}>
export type GetBlockHeightConfig = RequestConfig<
  GetBlockHeightRes,
  GetBlockHeightParams
>
export type GetBlockHeight = GetBlockHeightMethod<
  GetBlockHeightConfig,
  GetBlockHeightRes
>

// GetLogEventsByContractAddress
export type GetLogEventsByContractAddressReq = object
export type GetLogEventsByContractAddressRes = CovalentRes<object>
export type GetLogEventsByContractAddressParams = CovalentParams<{
  "starting-block": string
  "ending-block": string
  "page-number"?: number
  "page-size"?: number
}>
export type GetLogEventsByContractAddressConfig = RequestConfig<
  GetLogEventsByContractAddressRes,
  GetLogEventsByContractAddressParams
>
export type GetLogEventsByContractAddress = GetLogEventByContractMethod<
  GetLogEventsByContractAddressConfig,
  GetLogEventsByContractAddressRes
>

// GetLogEventsByTopicHashes
export type GetLogEventsByTopicHashesReq = object
export type GetLogEventsByTopicHashesRes = CovalentRes<object>
export type GetLogEventsByTopicHashesParams = CovalentParams<{
  "starting-block": string
  "ending-block": string
  "sender-address": string
  "secondary-topics"?: string
  "page-number"?: number
  "page-size"?: number
}>
export type GetLogEventsByTopicHashesConfig = RequestConfig<
  GetLogEventsByTopicHashesRes,
  GetLogEventsByTopicHashesParams
>
export type GetLogEventsByTopicHashes = GetLogEventByTopicMethod<
  GetLogEventsByTopicHashesConfig,
  GetLogEventsByTopicHashesRes
>

// GetAllChains
export type GetAllChainsReq = object
export type GetAllChainsRes = CovalentRes<object>
export type GetAllChainsParams = CovalentParams<{
  "page-number"?: number
  "page-size"?: number
}>
export type GetAllChainsConfig = RequestConfig<
  GetAllChainsRes,
  GetAllChainsParams
>
export type GetAllChains = GetAllChainsMethod<
  GetAllChainsConfig,
  GetAllChainsRes
>

// GetAllChainStatuses
export type GetAllChainStatusesReq = object
export type GetAllChainStatusesRes = CovalentRes<object>
export type GetAllChainStatusesParams = CovalentParams<{
  "page-number"?: number
  "page-size"?: number
}>
export type GetAllChainStatusesConfig = RequestConfig<
  GetAllChainStatusesRes,
  GetAllChainStatusesParams
>
export type GetAllChainStatuses = GetAllChainsMethod<
  GetAllChainStatusesConfig,
  GetAllChainStatusesRes
>

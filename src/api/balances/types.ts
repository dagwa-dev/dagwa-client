import { RequestConfig } from "api/axios/types"
import { CovalentParams, CovalentRes } from "api/covalent/types"

type TokenPagination = {
  has_more: boolean
  page_number: number
  page_size: number
  total_count: number | null
}

type TokenBalanceItem = {
  balance: string
  balance_24h: string
  contract_address: string
  contract_decimals: number
  contract_name: string
  contract_ticker_symbol: string
  last_transferred_at: Date
  logo_url: string
  native_token: boolean
  nft_data: any | null
  quote: number
  quote_24h: number
  quote_rate: number
  quote_rate_24h: number
  supports_erc: string[]
  type: string
}

export type Balances = {
  address: string
  updated_at: Date
  next_update_at: Date
  quote_currency: string
  chain_id: string
  items: TokenBalanceItem[]
  pagination: TokenPagination | null
}

export type Holding = {
  balance: string
  quote: number
}

export type HistoricalPortfolioValueItemHoldings = {
  timestamp: Date
  quote_rate: any | null
  open: Holding[]
  high: Holding[]
  low: Holding[]
  close: Holding[]
}

export type HistoricalPortfolioValueItem = {
  contract_decimals: number
  contract_name: string
  contract_ticker_symbol: string
  contract_address: string
  supports_erc: any | null
  logo_url: string
  holdings: HistoricalPortfolioValueItemHoldings[]
}

export type HistoricalPortfolioValue = {
  address: string
  updated_at: Date
  next_update_at: Date
  quote_currency: string
  chain_id: number
  items: HistoricalPortfolioValueItem[]
  pagination: TokenPagination | null
}

export type Transfer = {
  balance: any | null
  balance_quote: any | null
  block_signed_at: string
  contract_address: string
  contract_decimals: number
  contract_name: string
  contract_ticker_symbol: string
  delta: string
  delta_quote: number
  from_address: string
  from_address_label: string | null
  logo_url: string
  method_calls: any | null
  quote_rate: number
  to_address: string
  to_address_label: string | null
  transfer_type: string
  tx_hash: string
}

export type ERC20TokenTransfersItem = {
  block_height: number
  block_signed_at: Date
  fees_paid: any | null
  from_address: string
  from_address_label: string | null
  gas_offered: number
  gas_price: number
  gas_quote: number
  gas_quote_rate: number
  gas_spent: number
  successful: boolean
  to_address: string
  transfers: Transfer[]
  to_address_label: string | null
  tx_hash: string
  tx_offset: number
  value: string
  value_quote: number
}

export type ERC20TokenTransfers = {
  address: string
  updated_at: Date
  next_update_at: Date
  quote_currency: string
  chain_id: number
  items: ERC20TokenTransfersItem[]
  pagination: TokenPagination | null
}

export type TokenHoldersItem = object

export type TokenHolders = {
  updated_at: Date
  items: TokenHoldersItem[]
  pagination: TokenPagination | null
}

// Common Get Token Balances Method
export type CommonGetBalancesMethod<C = any, R = any> = (
  chainId: string,
  walletAddress: string,
  config?: C,
) => Promise<R>

// GetBalancesForAddress
export type GetBalancesForAddressReq = object
export type GetBalancesForAddressRes = CovalentRes<Balances>
export type GetBalancesForAddressParams = CovalentParams<{
  nft?: boolean
  "no-nft-fetch"?: boolean
}>
export type GetBalancesForAddressConfig = RequestConfig<
  GetBalancesForAddressRes,
  GetBalancesForAddressParams
>
export type GetBalancesForAddress = CommonGetBalancesMethod<
  GetBalancesForAddressConfig,
  GetBalancesForAddressRes
>

// GetHistoricalPortfolioValueOverTime
export type GetHistoricalPortfolioValueOverTimeReq = object
export type GetHistoricalPortfolioValueOverTimeRes =
  CovalentRes<HistoricalPortfolioValue>
export type GetHistoricalPortfolioValueOverTimeParams = CovalentParams
export type GetHistoricalPortfolioValueOverTimeConfig = RequestConfig<
  GetHistoricalPortfolioValueOverTimeRes,
  GetHistoricalPortfolioValueOverTimeParams
>
export type GetHistoricalPortfolioValueOverTime = CommonGetBalancesMethod<
  GetHistoricalPortfolioValueOverTimeConfig,
  GetHistoricalPortfolioValueOverTimeRes
>

// GetERC20TokenTransfersForAddress
export type GetERC20TokenTransfersForAddressReq = object
export type GetERC20TokenTransfersForAddressRes =
  CovalentRes<ERC20TokenTransfers>
export type GetERC20TokenTransfersForAddressParams = CovalentParams<{
  "contract-address": string
  "page-number"?: number
  "page-size"?: number
  "starting-block"?: number
  "ending-block"?: number
}>
export type GetERC20TokenTransfersForAddressConfig = RequestConfig<
  GetERC20TokenTransfersForAddressRes,
  GetERC20TokenTransfersForAddressParams
>
export type GetERC20TokenTransfersForAddress = CommonGetBalancesMethod<
  GetERC20TokenTransfersForAddressConfig,
  GetERC20TokenTransfersForAddressRes
>

// GetTokenHoldersAsOfAnyBlockHeight
export type GetTokenHoldersAsOfAnyBlockHeightReq = object
export type GetTokenHoldersAsOfAnyBlockHeightRes = CovalentRes<TokenHolders>
export type GetTokenHoldersAsOfAnyBlockHeightParams = CovalentParams<{
  "block-height"?: string
  "page-number"?: number
  "page-size"?: number
}>
export type GetTokenHoldersAsOfAnyBlockHeightConfig = RequestConfig<
  GetTokenHoldersAsOfAnyBlockHeightRes,
  GetTokenHoldersAsOfAnyBlockHeightParams
>
export type GetTokenHoldersAsOfAnyBlockHeight = CommonGetBalancesMethod<
  GetTokenHoldersAsOfAnyBlockHeightConfig,
  GetTokenHoldersAsOfAnyBlockHeightRes
>

// GetChangesInTokenHoldersBetweenTwoBlockHeights
export type GetChangesInTokenHoldersBetweenTwoBlockHeightsReq = object
export type GetChangesInTokenHoldersBetweenTwoBlockHeightsRes =
  CovalentRes<object>
export type GetChangesInTokenHoldersBetweenTwoBlockHeightsParams =
  CovalentParams<{
    "starting-block": number
    "ending-block"?: number
    "page-number"?: number
    "page-size"?: number
  }>
export type GetChangesInTokenHoldersBetweenTwoBlockHeightsConfig =
  RequestConfig<
    GetChangesInTokenHoldersBetweenTwoBlockHeightsReq,
    GetChangesInTokenHoldersBetweenTwoBlockHeightsParams
  >
export type GetChangesInTokenHoldersBetweenTwoBlockHeights =
  CommonGetBalancesMethod<
    GetChangesInTokenHoldersBetweenTwoBlockHeightsConfig,
    GetChangesInTokenHoldersBetweenTwoBlockHeightsRes
  >

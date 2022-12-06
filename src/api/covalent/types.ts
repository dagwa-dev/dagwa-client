export type CovalentCommonParams = {
  quote_currency?: "USD"
  format?: "JSON"
  nft?: boolean
  no_nft_fetch?: boolean
}

export type CovalentParams<P = any> = CovalentCommonParams & P

export type CovalentRes<D = any> = {
  data: D
  error: boolean
  error_message: string | null
  error_code: string | number | null
}

import { FC, PropsWithChildren } from "react"

import { CRYPTO_CURRENCY_SYMBOL } from "./constants"

export declare type SafeNumber = number | `${number}`

export type CryptoCurrencySymbol = typeof CRYPTO_CURRENCY_SYMBOL[number]

export type CRYPTO_INFO = {
  symbol: CryptoCurrencySymbol
  name: string
  color: string
}

type CryptoCurrencyIconColor = "color" | "icon" | "black" | "white"

export type CryptoCurrencyIconProps = PropsWithChildren<{
  color?: CryptoCurrencyIconColor
  symbol?: CryptoCurrencySymbol
  width?: SafeNumber
  height?: SafeNumber
}>

export interface ICryptoIcon extends FC<CryptoCurrencyIconProps> {}

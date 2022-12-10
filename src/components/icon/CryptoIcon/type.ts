import { FC, PropsWithChildren } from "react"

import { CRYPTO_SYMBOL } from "./constants"

declare type SafeNumber = number | `${number}`

type CryptoSymbol = typeof CRYPTO_SYMBOL[number]
type CryptoIconColor = "color" | "icon" | "black" | "white"

type CryptoIconProps = PropsWithChildren<{
  color?: CryptoIconColor
  symbol?: CryptoSymbol
  width?: SafeNumber
  height?: SafeNumber
}>

export interface ICryptoIcon extends FC<CryptoIconProps> {}

import "twin.macro"

import Image from "next/image"

import { ICryptoIcon } from "./type"

export const CryptoCurrencyIcon: ICryptoIcon = ({
  symbol = "BTC",
  color = "color",
  width = 16,
  height = 16,
}) => {
  const assetsSrcBase = "/cryptocurrency-icons"
  const assetsSrc = `${assetsSrcBase}/svg/${color}/${symbol.toLowerCase()}.svg`

  return <Image alt={symbol} src={assetsSrc} width={width} height={height} />
}

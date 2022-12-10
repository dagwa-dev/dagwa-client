import "twin.macro"

import _ from "lodash"
import Image from "next/image"

import { ICryptoIcon } from "./type"

export const CryptoIcon: ICryptoIcon = ({
  symbol = "BTC",
  color = "color",
  width = 16,
  height = 16,
}) => (
  <Image
    alt={symbol}
    src={`/cryptocurrency-icons/svg/${color}/${_.lowerCase(symbol)}.svg`}
    width={width}
    height={height}
  />
)

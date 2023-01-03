import "twin.macro"

import { Typography, Unstable_Grid2 } from "@mui/material"
import { CryptoCurrencyCard } from "components/card/CryptoCurrencyCard"
import { CryptoCurrencySymbol } from "components/icon/CryptoCurrencyIcon/type"
import { FC } from "react"

const majorCryptoCurrenciesTop4: CryptoCurrencySymbol[] = [
  "BTC",
  "ETH",
  "BNB",
  "MATIC",
]

interface IntroductionSectionProps {
  randomCryptoCurrencies: CryptoCurrencySymbol[]
}

export const IntroductionSection: FC<IntroductionSectionProps> = ({
  randomCryptoCurrencies,
}) => {
  return (
    <section tw="max-w-7xl my-0 mx-auto flex items-center py-8">
      <div tw="w-full mx-4 items-center xl:w-1/2">
        <Typography
          tw="text-center font-extrabold text-4xl"
          variant="h2"
          component={"h2"}>
          The Decentralized Application List
        </Typography>
      </div>
      <div tw="w-full mx-4 items-center hidden xl:block xl:w-1/2">
        <Unstable_Grid2 container spacing={2} tw="flex justify-center">
          {majorCryptoCurrenciesTop4.map((symbol) => (
            <Unstable_Grid2 key={symbol} tw="flex justify-center">
              <CryptoCurrencyCard symbol={symbol} size={48} />
            </Unstable_Grid2>
          ))}
          <Unstable_Grid2 tw="flex justify-center w-12" />
        </Unstable_Grid2>
        {randomCryptoCurrencies && (
          <>
            <Unstable_Grid2 container spacing={2} tw="flex justify-center">
              <Unstable_Grid2 tw="flex justify-center w-12" />
              {randomCryptoCurrencies.slice(0, 4).map((symbol) => (
                <Unstable_Grid2 key={symbol} tw="flex justify-center">
                  <CryptoCurrencyCard symbol={symbol} size={48} />
                </Unstable_Grid2>
              ))}
            </Unstable_Grid2>
            <Unstable_Grid2 container spacing={2} tw="flex justify-center">
              {randomCryptoCurrencies.slice(4, 8).map((symbol) => (
                <Unstable_Grid2 key={symbol} tw="flex justify-center">
                  <CryptoCurrencyCard symbol={symbol} size={48} />
                </Unstable_Grid2>
              ))}
              <Unstable_Grid2 tw="flex justify-center w-12" />
            </Unstable_Grid2>
            <Unstable_Grid2 container spacing={2} tw="flex justify-center">
              <Unstable_Grid2 tw="flex justify-center w-12" />
              {randomCryptoCurrencies.slice(8, 12).map((symbol) => (
                <Unstable_Grid2 key={symbol} tw="flex justify-center">
                  <CryptoCurrencyCard symbol={symbol} size={48} />
                </Unstable_Grid2>
              ))}
            </Unstable_Grid2>
          </>
        )}
      </div>
    </section>
  )
}

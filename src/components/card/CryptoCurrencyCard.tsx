import { Card, CardMedia } from "@mui/material"
import { CryptoCurrencyIcon } from "components/icon"
import { CRYPTO_CURRENCY_INFO_LIST } from "components/icon/CryptoCurrencyIcon/constants"
import {
  CryptoCurrencySymbol,
  SafeNumber,
} from "components/icon/CryptoCurrencyIcon/type"
import { useRouter } from "next/router"
import { FC, PropsWithChildren } from "react"
import tw from "twin.macro"

interface CryptoCurrencyCardProps extends PropsWithChildren {
  symbol: CryptoCurrencySymbol
  href?: string
  size?: SafeNumber
}

const styles = {
  container: ({ hasHref }: { hasHref: boolean }) => [
    tw`p-5 border-2 shadow-2xl`,
    hasHref && tw`hover:cursor-pointer hover:border-green-400`,
  ],
}

export const CryptoCurrencyCard: FC<CryptoCurrencyCardProps> = ({
  symbol,
  href,
  size = 24,
}) => {
  const router = useRouter()

  const cryptoCurrency = CRYPTO_CURRENCY_INFO_LIST.find(
    (info) => info.symbol === symbol,
  )

  return (
    <Card
      css={styles.container({
        hasHref: Boolean(href),
      })}
      style={{
        borderColor: cryptoCurrency ? `${cryptoCurrency.color}` : "#fff",
        background: cryptoCurrency ? `${cryptoCurrency.color}` : "#fff",
      }}
      onClick={() => {
        if (href) router.push(href)
      }}>
      <CardMedia
        component={CryptoCurrencyIcon}
        color={"color"}
        symbol={symbol}
        height={size}
        width={size}
      />
    </Card>
  )
}

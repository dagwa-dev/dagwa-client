import FavoriteIcon from "@mui/icons-material/Favorite"
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material"
import { NFTsItem } from "api/nfts/types"
import { useRouter } from "next/router"
import { FC, PropsWithChildren, useState } from "react"
import tw from "twin.macro"

interface NftCardProps extends PropsWithChildren {
  item: NFTsItem
  chainIds: string[]
  height?: string
}

const styles = {
  container: () => [
    tw`p-1 border-2 border-white shadow-inner hover:border-green-400`,
  ],
  title: ({ isHover }: { isHover: boolean }) => [
    tw`pt-2 text-center`,
    isHover && tw`text-black`,
  ],
}

export const NftCard: FC<NftCardProps> = ({
  height = "140",
  item,
  chainIds,
}) => {
  const router = useRouter()
  const [isHover, setIsHover] = useState(false)

  const handlePressChainIcon = (chainId: string) => {
    if (chainId)
      router.push(
        `/chains/${chainId}/nfts/${item.contract_address}/${item.token_id}`,
      )
  }

  return (
    <Card
      css={styles.container()}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}>
      {/* <CardMedia
        component="img"
        height={height}
        image={item.logo_url}
        alt={item.token_id}
      /> */}
      <CardContent tw="pb-0">
        <Typography
          variant="body1"
          component="div"
          css={styles.title({ isHover })}>
          {item.token_id}
        </Typography>
      </CardContent>
      <CardActions disableSpacing tw="px-0 justify-evenly">
        {chainIds.map((chainId) => (
          <IconButton
            key={chainId}
            aria-label="go to nft info with chain"
            size="small"
            onClick={() => handlePressChainIcon(chainId)}>
            {/* TODO change icon(svg) */}
            <FavoriteIcon fontSize="small" />
          </IconButton>
        ))}
      </CardActions>
    </Card>
  )
}

import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material"
import { useRouter } from "next/router"
import { FC, PropsWithChildren, useState } from "react"
import tw from "twin.macro"

interface DAppCardProps extends PropsWithChildren {
  title?: string
  chainId?: string
  dappId?: string
  height?: string
  alt?: string
  image?: string
}

const styles = {
  container: ({ hasHref }: { hasHref: boolean }) => [
    tw`p-1 border-2 border-white shadow-none hover:border-green-400`,
    hasHref && tw`hover:cursor-pointer`,
  ],
  title: ({ isHover }: { isHover: boolean }) => [
    tw`pt-2 text-center`,
    isHover && tw`text-black`,
  ],
}

export const DAppCard: FC<DAppCardProps> = ({
  chainId = "",
  dappId = "",
  height = "140",
  alt = "...",
  image = "/images/sample-image.jpg",
  title,
}) => {
  const href = `/chains/${chainId}/dapps/${dappId}`
  const router = useRouter()
  const [isHover, setIsHover] = useState(false)

  const handleClickFavorite = () => {
    console.info("Favorite")
  }
  const handleClickShare = () => {
    console.info("Share")
  }

  return (
    <Card
      css={styles.container({ hasHref: Boolean(href) })}
      onClick={() => {
        if (href) {
          router.push(href)
        }
      }}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}>
      <CardMedia component="img" height={height} image={image} alt={alt} />
      <CardContent tw="pb-0">
        <Typography
          variant="body1"
          component="div"
          css={styles.title({ isHover })}>
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing tw="px-0 justify-evenly">
        <IconButton
          aria-label="add to favorites"
          size="small"
          onClick={handleClickFavorite}>
          <FavoriteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="share" size="small" onClick={handleClickShare}>
          <ShareIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  )
}

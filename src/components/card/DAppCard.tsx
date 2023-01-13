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
import { FC, PropsWithChildren } from "react"
import tw from "twin.macro"

interface DAppCardProps extends PropsWithChildren {
  href?: string
  height?: string
  alt?: string
  image?: string
  title: string
  desc?: string
}

const styles = {
  container: ({ hasHref }: { hasHref: boolean }) => [
    tw`p-2 border-2 border-white shadow-md hover:border-green-400`,
    hasHref && tw`hover:cursor-pointer`,
  ],
}

export const DAppCard: FC<DAppCardProps> = ({
  href,
  height = "140",
  alt = "...",
  image = "/images/sample-image.jpg",
  title,
  desc,
}) => {
  const router = useRouter()

  const handleClickFavorite = () => {
    console.info("Favorite")
  }
  const handleClickShare = () => {
    console.info("Share")
  }

  const trimDesc = (desc: string) => {
    const maxLength = 120
    if (desc.length <= maxLength) return desc
    const trimmed = desc.slice(0, maxLength)
    const reTrimmed = trimmed.slice(
      0,
      Math.min(trimmed.length, trimmed.lastIndexOf(" ")),
    )

    return `${reTrimmed} ...`
  }

  return (
    <Card
      css={styles.container({ hasHref: Boolean(href) })}
      onClick={() => {
        if (href) router.push(href)
      }}>
      <CardMedia component="img" height={height} image={image} alt={alt} />
      <CardContent tw="px-1 py-1">
        <Typography variant="h5" component="h4" tw="pt-2">
          {title}
        </Typography>
        {desc && (
          <Typography variant="h6" tw="pt-1">
            {trimDesc(desc)}
          </Typography>
        )}
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

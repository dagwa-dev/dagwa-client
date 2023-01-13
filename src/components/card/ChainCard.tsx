import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { FC, PropsWithChildren } from "react"
import tw from "twin.macro"

interface ChainCardProps extends PropsWithChildren {
  href?: string
  height?: string
  alt?: string
  image?: string
  title: string
  desc?: string
}

const styles = {
  container: ({ hasHref }: { hasHref: boolean }) => [
    tw`p-5 border-2 border-white shadow-md hover:border-green-400`,
    hasHref && tw`hover:cursor-pointer`,
  ],
}

export const ChainCard: FC<ChainCardProps> = ({
  href,
  height = "140",
  alt = "...",
  image = "/images/sample-image.jpg",
  title,
  desc,
}) => {
  const router = useRouter()

  return (
    <Card
      css={styles.container({ hasHref: Boolean(href) })}
      onClick={() => {
        if (href) router.push(href)
      }}>
      <CardMedia component="img" height={height} image={image} alt={alt} />
      <CardContent tw="p-0">
        <Typography variant="h5" component="h4" tw="pt-2">
          {title}
        </Typography>
        {desc && (
          <Typography variant="h6" tw="pt-1">
            {desc}
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}

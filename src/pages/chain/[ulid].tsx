import "twin.macro"

import { Typography, Unstable_Grid2 } from "@mui/material"
import { useChain } from "hooks/useChain"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const ChainDetailPage: NextPage = () => {
  const router = useRouter()
  const [ulid, setUlid] = useState("")
  const { chain, loading } = useChain(ulid)

  useEffect(() => {
    if (router.query.ulid) setUlid(router.query.ulid as string)
  }, [router])

  if (loading) return <div>now loading...</div>
  if (!chain) return null

  return (
    <div tw="w-full">
      <section tw="max-w-5xl mx-auto px-2 py-4">
        <Typography>Chains{chain.name && ` / ${chain.name}`}</Typography>
        <Unstable_Grid2
          container
          tw="mt-2"
          // spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}></Unstable_Grid2>
      </section>
    </div>
  )
}

export default ChainDetailPage

import "twin.macro"

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  TextField,
  Typography,
  Unstable_Grid2,
} from "@mui/material"
import Button from "@mui/material/Button"
import { FC, useState } from "react"

import { useSubscription } from " hooks/useSubscription"

type SubscribeSectionProps = object

export const SubscribeSection: FC<SubscribeSectionProps> = () => {
  const { trigger } = useSubscription()
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async () => {
    handleClose()
    await trigger(email)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <section tw="max-w-7xl my-0 mx-auto flex items-center py-8">
      <Paper tw="w-full px-6 py-8 mx-4">
        <Unstable_Grid2 container tw="w-full flex items-start justify-between">
          <Unstable_Grid2 tw="pb-0 text-2xl" xs={4} sm={4} md={4}>
            <Typography variant="h3" component={"h3"} tw="text-2xl mb-2">
              Subscribe to our news
            </Typography>
            <Typography variant="h4" component={"h4"} tw="text-sm">
              Get the newsletter and all the latest trends directly to your
              inbox.
            </Typography>
          </Unstable_Grid2>
          <Unstable_Grid2 tw="pb-0 flex justify-center" xs={4} sm={4} md={4}>
            <TextField
              id="margin-dense"
              placeholder="Your email"
              value={email}
              color="info"
              inputProps={{
                style: {
                  width: "240px",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  fontSize: "18px",
                },
              }}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <Button
              variant="contained"
              onClick={handleClickOpen}
              color="info"
              tw="ml-2 text-lg">
              Subscribe
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description">
              <DialogTitle id="alert-dialog-title">
                {"You're Almost Done. Activate Your Subscription!"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Subscribe to get the latest news and updates as quickly as
                  possible!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                  onClick={() => {
                    handleSubmit()
                  }}
                  autoFocus>
                  Subscribe
                </Button>
              </DialogActions>
            </Dialog>
          </Unstable_Grid2>
        </Unstable_Grid2>
      </Paper>
    </section>
  )
}

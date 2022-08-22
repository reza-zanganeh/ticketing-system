import { forwardRef, useImperativeHandle, useState } from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import { requestToBecomeSuporter } from "../../store/Slices/requestSupporter"
import { useDispatch } from "react-redux"
const RequestToBecomeSupporterDialog = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSendRequest = () => {
    dispatch(requestToBecomeSuporter())
    handleClose()
  }

  useImperativeHandle(ref, () => ({
    handleClickOpen,
  }))

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            are you sure to request to become supporter ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleSendRequest} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
})

export default RequestToBecomeSupporterDialog

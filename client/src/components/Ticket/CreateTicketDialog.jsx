import { useState, useImperativeHandle, forwardRef } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"

import { createNewTicket } from "../../store/Slices/ticket"
import { useDispatch } from "react-redux"
const CreateTicketDialog = forwardRef((props, ref) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  })

  const handleChange = (event) => {
    setFormData((prevSate) => ({
      ...prevSate,
      [`${event.target.name}`]: event.target.value,
    }))
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleCreateTicket = () => {
    dispatch(createNewTicket(formData))
    handleClose()
  }

  useImperativeHandle(ref, () => ({
    handleClickOpen,
  }))

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Ticket</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            required
            margin="dense"
            name="title"
            placeholder="enter ticket title"
            fullWidth
            type="text"
            color="primary"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            required
            color="primary"
            margin="dense"
            name="content"
            placeholder="enter ticket content"
            fullWidth
            type="text"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreateTicket}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
})

export default CreateTicketDialog

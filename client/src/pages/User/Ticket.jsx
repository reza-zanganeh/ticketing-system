/** @format */
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material"
import { Container } from "@mui/system"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchTickets,
  selectAllTickets,
  getSelectTicketStatus,
  responseToTicket,
  rejectTicket,
  deleteTicket,
} from "../../store/Slices/ticket"
import { getUserInfo } from "../../helper/localStorgeUserInfo"
import { useState } from "react"
const UserTicket = () => {
  const user = getUserInfo() || {}
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])
  const [response, setResponse] = useState("")

  const sendResponseHandler = (event) => {
    event.preventDefault()
    const ticketId = event.target.dataset.ticketId
    dispatch(
      responseToTicket({
        id: ticketId,
        response,
      })
    )
  }

  const rejectTicketHandler = (event) => {
    const ticketId = event.target.dataset.ticketId
    dispatch(
      rejectTicket({
        id: ticketId,
      })
    )
  }

  const removeTicketHandler = (event) => {
    const ticketId = event.target.dataset.ticketId
    dispatch(
      deleteTicket({
        ticketId,
      })
    )
  }

  const tickets = useSelector(selectAllTickets)
  const status = useSelector(getSelectTicketStatus)
  let content

  if (status === "loading") content = <CircularProgress />

  if (status === "success")
    content = tickets.map((ticket) => {
      let response
      if (ticket.status === "ANSWERED")
        response = (
          <Typography variant="body2">response : {ticket.response}</Typography>
        )
      else if (ticket.status === "REJECT")
        response = (
          <Typography variant="body2" color="red">
            rejected
          </Typography>
        )
      else if (ticket.status === "Wating")
        response = (
          <Typography variant="body2" color="blue">
            pendding
          </Typography>
        )

      return (
        <Card key={ticket.id} sx={{ width: "100%", margin: "1rem 0" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              author : {ticket.author.fullname}
            </Typography>
            <Typography variant="h6" component="div">
              {ticket.title}
            </Typography>
            <Typography variant="body2">{ticket.content}</Typography>
            {response}
            {(user.role === "SUPPORTER" || user.role === "ADMIN") &&
            ticket.status === "Wating" ? (
              <>
                <form
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "5px",
                  }}
                  onSubmit={sendResponseHandler}
                  data-ticket-id={ticket.id}
                >
                  <TextField
                    variant="outlined"
                    required
                    margin="dense"
                    name="content"
                    placeholder="enter response"
                    fullWidth
                    type="text"
                    onChange={(e) => {
                      setResponse(e.target.value)
                    }}
                  />
                  <Button variant="outlined" type="submit">
                    Send
                  </Button>
                  <Button
                    variant="outlined"
                    data-ticket-id={ticket.id}
                    onClick={rejectTicketHandler}
                    sx={{
                      marginLeft: "1rem",
                    }}
                  >
                    reject
                  </Button>
                  {user.role === "ADMIN" ? (
                    <Button
                      variant="outlined"
                      data-ticket-id={ticket.id}
                      onClick={removeTicketHandler}
                      sx={{
                        marginLeft: "1rem",
                      }}
                    >
                      remove
                    </Button>
                  ) : (
                    ""
                  )}
                </form>
              </>
            ) : (
              ""
            )}
          </CardContent>
        </Card>
      )
    })

  return (
    <Container
      sx={{
        margin: "1.5rem auto",
        overflowY: "scroll",
        height: "80vh",
      }}
    >
      {content}
    </Container>
  )
}

export default UserTicket

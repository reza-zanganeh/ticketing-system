import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material"
import { Container } from "@mui/system"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchRequestToBecomeSuporter,
  selectAllRequestToBecomeSupporter,
  acceptRequestToBecomeSuporter,
  rejectRequestToBecomeSuporter,
} from "../../store/Slices/requestSupporter"

const RequestToBecomeSupporter = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRequestToBecomeSuporter())
  }, [dispatch])

  const RequestToBecomeSuporter = useSelector(selectAllRequestToBecomeSupporter)

  const acceptRequestHandler = (event) => {
    const requestId = event.target.dataset.requestId
    dispatch(
      acceptRequestToBecomeSuporter({
        requestId,
      })
    )
  }

  const rejectRequestHandler = (event) => {
    const requestId = event.target.dataset.requestId
    dispatch(
      rejectRequestToBecomeSuporter({
        requestId,
      })
    )
  }

  return (
    <Container
      sx={{
        margin: "1.5rem auto",
        display: "flex",
        alignItems: "flex-start",
        flexWrap: "wrap",
        overflowY: "scroll",
        height: "80vh",
      }}
    >
      {RequestToBecomeSuporter.map((request) => {
        let response
        if (request.status === "ACCEPT")
          response = <Typography variant="body2">status : accept</Typography>
        else if (request.status === "REJECT")
          response = (
            <Typography variant="body2" color="red">
              status : rejected
            </Typography>
          )
        else if (request.status === "Wating")
          response = (
            <Typography variant="body2" color="blue">
              status : pendding
            </Typography>
          )

        return (
          <Card
            key={request.id}
            sx={{
              width: "100%",
              margin: "1rem",
              display: "flex",
              padding: "1rem",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                user : {request.user.fullname}
              </Typography>
            </CardContent>
            {response}
            <CardActions>
              <Button
                data-request-id={request.id}
                onClick={acceptRequestHandler}
                variant="outlined"
                disabled={request.status === "ACCEPT"}
              >
                Accept
              </Button>
              <Button
                data-request-id={request.id}
                onClick={rejectRequestHandler}
                variant="outlined"
                disabled={request.status === "REJECT"}
              >
                Reject
              </Button>
            </CardActions>
          </Card>
        )
      })}
    </Container>
  )
}

export default RequestToBecomeSupporter

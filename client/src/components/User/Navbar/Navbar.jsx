/** @format */

import { useRef } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber"
import CreateTicketDialog from "../../Ticket/CreateTicketDialog"
import RequestToBecomeSupporterDialog from "../RequestToBecomeSupporterDialog"
import { Link, useNavigate, NavLink } from "react-router-dom"
import {
  removeUserInfo,
  getUserInfo,
} from "../../../helper/localStorgeUserInfo"
import config from "../../../config"
import { toast } from "react-toastify"
const Navbar = () => {
  const navigate = useNavigate()
  const logoutHandler = () => {
    removeUserInfo()
    toast.warn("you are logout")
    setTimeout(() => {
      navigate("/")
    }, config.toastTime)
  }

  const user = getUserInfo()

  const createTicketDialogRef = useRef()
  const requestToBecomeSupporterDialogRef = useRef()

  const createTicketHandler = () => {
    createTicketDialogRef.current.handleClickOpen()
  }

  const requestToBecomeSupporterHandler = () => {
    requestToBecomeSupporterDialogRef.current.handleClickOpen()
  }

  return (
    <>
      <CreateTicketDialog ref={createTicketDialogRef} />
      <RequestToBecomeSupporterDialog ref={requestToBecomeSupporterDialogRef} />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ConfirmationNumberIcon sx={{ display: "flex", mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Ticketing
            </Typography>
            {user ? (
              <>
                {user.role === "USER" ? (
                  <>
                    <Box>
                      <Button
                        variant="outlined"
                        sx={{
                          color: "white",
                          textTransform: "capitalize",
                        }}
                        onClick={createTicketHandler}
                      >
                        Create Ticket
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        variant="outlined"
                        sx={{
                          color: "white",
                          textTransform: "capitalize",
                        }}
                        onClick={requestToBecomeSupporterHandler}
                      >
                        request to become supporter
                      </Button>
                    </Box>
                  </>
                ) : (
                  ""
                )}
                {user.role === "ADMIN" ? (
                  <>
                    <Box>
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "white",
                          fontFamily: "Roboto",
                          fontWeight: "500",
                          fontSize: "0.875rem",
                          lineHeight: "1.75",
                          padding: "5px 15px",
                          letterSpacing: "0.02857em",
                        }}
                        to="/admin/dashboard"
                      >
                        Admin Dashboard
                      </NavLink>
                    </Box>
                    <Box>
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "white",
                          fontFamily: "Roboto",
                          fontWeight: "500",
                          fontSize: "0.875rem",
                          lineHeight: "1.75",
                          letterSpacing: "0.02857em",
                          padding: "5px 15px",
                        }}
                        to="/tickets"
                      >
                        Tickets
                      </NavLink>
                    </Box>
                  </>
                ) : (
                  ""
                )}
                <Box>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "white",
                      textTransform: "capitalize",
                    }}
                    onClick={logoutHandler}
                  >
                    Logout
                  </Button>
                </Box>
              </>
            ) : (
              ""
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
export default Navbar

/** @format */

import React from "react"
import {
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material"
import { Link } from "react-router-dom"
import YellowPaper from "../components/common/YellowPaper"
import Navbar from "../components/User/Navbar/Navbar"
import IsAdmin from "../RouterGuard/IsAdmin"
import { Outlet } from "react-router-dom"
const AdminDoshboard = ({ items }) => {
  return (
    <IsAdmin>
      <Navbar />
      <Container>
        <Grid container width="100%">
          <Grid
            style={{
              height: "94vh",
            }}
            item
            xs={4}
          >
            <YellowPaper
              elevation={2}
              style={{
                alignItems: "flex-start",
                justifyContent: "start",
                padding: "5%",
                gap: "2px",
                overflow: "hidden scroll",
              }}
            >
              {items.map((item, idx) => (
                <Card
                  style={{
                    width: "100%",
                    height: "6rem",
                    overflow: "unset",
                  }}
                  key={idx}
                  variant="outlined"
                >
                  <CardContent sx={{ p: "0 8px", m: "0" }}>
                    <Typography
                      component="p"
                      variant="h6"
                      color="black"
                      gutterBottom
                      style={{
                        textTransform: "capitalize",
                        padding: "0",
                        margin: "0",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ padding: "0", margin: "0" }}>
                    <Button component={Link} to={item.link}>
                      Show
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </YellowPaper>
          </Grid>
          <Grid
            style={{
              height: "94vh",
            }}
            item
            xs={8}
            alignItems="center"
            justifyContent="center"
          >
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </IsAdmin>
  )
}

export default AdminDoshboard

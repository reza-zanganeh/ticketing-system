/** @format */

import React from "react"
import { Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <Typography
        textAlign="center"
        component="h1"
        variant="h4"
        sx={{
          mt: "4rem",
        }}
      >
        Home
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "60%",
          flexDirection: "column",
          margin: "auto 0",
        }}
      >
        <Button
          sx={{
            mb: "3rem",
            borderColor: "#000957",
            color: "#000957",
            borderRadius: "20px",
            textDecoration: "none",
          }}
          fullWidth
          variant="outlined"
          component={Link}
          to="/login"
        >
          Login
        </Button>
        <Button
          sx={{
            borderColor: "#000957",
            color: "#000957",
            borderRadius: "20px",
            textDecoration: "none",
          }}
          fullWidth
          variant="outlined"
          to="/signup"
          component={Link}
        >
          SignUp
        </Button>
      </div>
    </>
  )
}

export default Home

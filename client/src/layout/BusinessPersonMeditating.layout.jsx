/** @format */

import React from "react"
import { Grid, Container } from "@mui/material"
import BusinessPerson from "../assets/images/business-person-meditating.svg"
import YellowPaper from "../components/common/YellowPaper"
import Navbar from "../components/User/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import NeedNotAuth from "../RouterGuard/NeedNotAuth"

const BusinessPersonMeditatingLayout = () => {
  return (
    <NeedNotAuth>
      <Navbar />
      <Container>
        <Grid
          container
          sx={{
            justifyContent: {
              md: "stretch",
              xs: "center",
            },
          }}
          width="100%"
        >
          <Grid
            item
            md={7}
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
            alignItems="center"
            justifyContent="center"
          >
            <img
              style={{
                height: "auto",
                width: "100%",
              }}
              src={BusinessPerson}
              alt="BusinessPerson"
            />
          </Grid>
          <Grid item md={5} xs={12}>
            <YellowPaper elevation={2}>
              <Outlet />
            </YellowPaper>
          </Grid>
        </Grid>
      </Container>
    </NeedNotAuth>
  )
}

export default BusinessPersonMeditatingLayout

import React from "react"
import Navbar from "../components/User/Navbar/Navbar"
import NeedAuth from "../RouterGuard/NeedAuth"
import { Outlet } from "react-router-dom"
const Default = () => {
  return (
    <NeedAuth>
      <Navbar />
      <Outlet />
    </NeedAuth>
  )
}

export default Default

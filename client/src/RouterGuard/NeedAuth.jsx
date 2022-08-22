import React from "react"
import { Navigate } from "react-router-dom"
import { getUserInfo } from "../helper/localStorgeUserInfo"
const NeedAuth = ({ children }) => {
  if (!getUserInfo()) return <Navigate to="/" />
  return children
}

export default NeedAuth

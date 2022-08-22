import React from "react"
import { Navigate } from "react-router-dom"
import { getUserInfo } from "../helper/localStorgeUserInfo"
const NeedAuth = ({ children }) => {
  const user = getUserInfo()
  if (user && user.role === "ADMIN") return children
  return <Navigate to="/admin" />
}

export default NeedAuth

import React from "react"
import { Navigate } from "react-router-dom"
import { getUserInfo } from "../helper/localStorgeUserInfo"
const NeedNotAuth = ({ children }) => {
  if (getUserInfo()) {
    return <Navigate to="/tickets" />
  }
  return children
}

export default NeedNotAuth

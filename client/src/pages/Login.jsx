/** @format */
import React from "react"
import LoginForm from "../components/Form/LoginForm"
import { useDispatch, useSelector } from "react-redux"
import {
  getSelectAuthLoginStatus,
  login,
  onLoadingLogin,
} from "../store/Slices/auth"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import config from "../config"
import { getUserInfo } from "../helper/localStorgeUserInfo"
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const status = useSelector(getSelectAuthLoginStatus)

  const handleSubmit = (formData) => {
    dispatch(onLoadingLogin())
    dispatch(login(formData))
  }

  useEffect(() => {
    // if (status === "faild") toast.error("login faild")
    if (status === "success") {
      toast.success("your are login")
      setTimeout(() => {
        const user = getUserInfo()
        if (user.role === "ADMIN") navigate("/admin/dashboard")
        else navigate("/tickets")
      }, config.toastTime)
    }
  }, [navigate, status])

  return <LoginForm title="Welcome Back" handleSubmitForm={handleSubmit} />
}

export default Login

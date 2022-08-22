/** @format */
import React from "react"
import SignupForm from "../components/Form/SignupForm"
import { useDispatch, useSelector } from "react-redux"
import {
  getSelectAuthSignupStatus,
  signup,
  onLoadingSignup,
} from "../store/Slices/auth"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import config from "../config"
const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const status = useSelector(getSelectAuthSignupStatus)

  const handleSubmit = (formData) => {
    dispatch(onLoadingSignup())
    dispatch(signup(formData))
  }

  useEffect(() => {
    // if (status === "faild") toast.error("signup faild")
    if (status === "success") {
      toast.success("your are signup")
      setTimeout(() => {
        navigate("/tickets")
      }, config.toastTime)
    }
  }, [navigate, status])

  return (
    <SignupForm
      title="Please Fill out the form to register"
      handleSubmitForm={handleSubmit}
    />
  )
}

export default Signup

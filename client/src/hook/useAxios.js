/** @format */

import axios from "axios"
import config from "../config"
import { toast } from "react-toastify"
import { getUserInfo, removeUserInfo } from "../helper/localStorgeUserInfo"
const axiosInstance = axios.create({
  baseURL: config.server.BASE_URL,
})

axiosInstance.interceptors.request.use((config) => {
  const user = getUserInfo()
  if (user) {
    config.headers.accesstoken = user.token
  }
  return config
})

axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.status === 401) {
      toast.error("your session is expired! Please Login")
      removeUserInfo()
      setTimeout(() => {
        window.location.replace("/")
      }, config.toastTime)
    }
  }
)

export default axiosInstance

/** @format */

import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit"
import axiosInstance from "../../hook/useAxios"
import { setUserInfo, getUserInfo } from "../../helper/localStorgeUserInfo"
export const signup = createAsyncThunk("auth/signup", async (userData) => {
  const { fullname, username, email, password } = userData
  const response = await axiosInstance.post("/api/user/signup", {
    fullname,
    username,
    email,
    password,
  })
  return response.data
})

export const login = createAsyncThunk("auth/login", async (userData) => {
  const { username, password } = userData
  const response = await axiosInstance.post("/api/user/login", {
    username,
    password,
  })
  return response.data
})

const authFullfield = (state, action) => {
  const { fullname, role, username } = action.payload.data
  state.fullname = fullname
  state.role = role
  state.username = username
  setUserInfo(action.payload.data)
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    fullname: "",
    username: "",
    role: "",
    signupStatus: "idle", //idle | faild | loading | success
    loginStatus: "idle", //idle | faild | loading | success
  },
  reducers: {
    logout(state) {
      state.fullname = ""
      state.role = ""
      state.username = ""
      state.signupStatus = "idle"
      state.loginStatus = "idle"
    },
    autoLogin(state) {
      const userInfo = getUserInfo()
      if (userInfo) {
        const { fullname, role, username } = userInfo
        state.fullname = fullname
        state.role = role
        state.username = username
      }
    },
    onLoadingLogin(state) {
      state.loginStatus = "loading"
    },
    onLoadingSignup(state) {
      state.signupStatus = "loading"
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        authFullfield(state, action)
        state.signupStatus = "success"
      })
      .addCase(signup.rejected, (state, action) => {
        state.signupStatus = "faild"
      })
      .addCase(login.fulfilled, (state, action) => {
        authFullfield(state, action)
        state.loginStatus = "success"
      })
      .addCase(login.rejected, (state, action) => {
        state.loginStatus = "faild"
      })
  },
})

export const { logout, autoLogin, onLoadingLogin, onLoadingSignup } =
  authSlice.actions

export const getSelectAuthLoginStatus = createSelector(
  [(state) => state.auth.loginStatus],
  (loginStatus) => loginStatus
)

export const getSelectAuthSignupStatus = createSelector(
  [(state) => state.auth.signupStatus],
  (signupStatus) => signupStatus
)

export default authSlice.reducer

/** @format */

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.scss"
import store from "./store/Index"
import { Provider } from "react-redux/es/exports"
import { BrowserRouter } from "react-router-dom"
import { autoLogin } from "./store/Slices/auth"
store.dispatch(autoLogin())
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

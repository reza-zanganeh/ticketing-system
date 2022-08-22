/** @format */

import { configureStore } from "@reduxjs/toolkit"
import AuthReducer from "./Slices/auth"
import TicketReducer from "./Slices/ticket"
import requestSupporterReducer from "./Slices/requestSupporter"
const store = configureStore({
  reducer: {
    auth: AuthReducer,
    tickets: TicketReducer,
    requestSupporter: requestSupporterReducer,
  },
})

export default store

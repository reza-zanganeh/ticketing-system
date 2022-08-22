import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit"
import axiosInstance from "../../hook/useAxios"
import { getUserInfo } from "../../helper/localStorgeUserInfo"
const user = getUserInfo()
const ticketEntityAdaptor = createEntityAdapter()

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async () => {
    const response = await axiosInstance.get("/api/ticket")
    return response.data
  }
)

export const createNewTicket = createAsyncThunk(
  "tickets/createNewTicket",
  async (newTicket) => {
    const response = await axiosInstance.post("/api/ticket", newTicket)
    return response.data
  }
)

export const deleteTicket = createAsyncThunk(
  "tickets/deleteTicket",
  async (data) => {
    const response = await axiosInstance.delete(`/api/ticket/${data.ticketId}`)
    return response.data
  }
)

export const responseToTicket = createAsyncThunk(
  "tickets/responseToTicket",
  async (data) => {
    const response = await axiosInstance.patch(
      `/api/ticket/response/${data.id}`,
      {
        response: data.response,
      }
    )
    return response.data
  }
)

export const rejectTicket = createAsyncThunk(
  "tickets/rejectTicket",
  async (data) => {
    const response = await axiosInstance.patch(`/api/ticket/reject/${data.id}`)
    return response.data
  }
)

const ticketSlice = createSlice({
  name: "tickets",
  initialState: ticketEntityAdaptor.getInitialState({
    status: "idle", //idle | faild | loading | success
  }),
  reducers: {
    onLoading(state, action) {
      state.status = "loading"
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTickets.fulfilled, (state, action) => {
        ticketEntityAdaptor.setAll(state, action.payload.data)
        state.status = "success"
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = "faild"
      })
      .addCase(createNewTicket.fulfilled, (state, action) => {
        ticketEntityAdaptor.addOne(state, {
          ...action.payload.data,
          author: { fullname: user.fullname },
        })
        state.status = "success"
      })
      .addCase(createNewTicket.rejected, (state, action) => {
        state.status = "faild"
      })
      .addCase(deleteTicket.fulfilled, (state, action) => {
        ticketEntityAdaptor.removeOne(state, action.payload.data.id)
        state.status = "success"
      })
      .addCase(responseToTicket.fulfilled, (state, action) => {
        state.entities[action.payload.data.id].response =
          action.payload.data.response
        state.entities[action.payload.data.id].status =
          action.payload.data.status
      })
      .addCase(rejectTicket.fulfilled, (state, action) => {
        state.entities[action.payload.data.id].status =
          action.payload.data.status
      })
  },
})

export const {
  selectAll: selectAllTickets,
  selectById: selectTicketById,
  selectEntities,
  selectIds,
  selectTotal,
} = ticketEntityAdaptor.getSelectors((state) => state.tickets)

export const { onLoading } = ticketSlice.actions

export const getSelectTicketStatus = createSelector(
  [(state) => state.tickets.status],
  (status) => status
)

export default ticketSlice.reducer

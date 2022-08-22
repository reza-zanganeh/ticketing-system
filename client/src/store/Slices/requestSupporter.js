import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit"
import axiosInstance from "../../hook/useAxios"

export const fetchRequestToBecomeSuporter = createAsyncThunk(
  "supporter/fetchRequestToBecomeSuporter",
  async () => {
    const response = await axiosInstance.get("/api/admin/request-supporter")
    return response.data
  }
)

export const acceptRequestToBecomeSuporter = createAsyncThunk(
  "supporter/acceptRequestToBecomeSuporter",
  async (data) => {
    const response = await axiosInstance.patch(
      `/api/admin/request-supporter/accept/${data.requestId}`
    )
    return response.data
  }
)

export const rejectRequestToBecomeSuporter = createAsyncThunk(
  "supporter/rejectRequestToBecomeSuporter",
  async (data) => {
    const response = await axiosInstance.patch(
      `/api/admin/request-supporter/reject/${data.requestId}`
    )
    return response.data
  }
)

export const requestToBecomeSuporter = createAsyncThunk(
  "supporter/requestToBecomeSuporter",
  async () => {
    const response = await axiosInstance.post("/api/user/request-supporter")
    return response.data
  }
)

const requestSupporterEntity = createEntityAdapter()

const requestSupporterSlice = createSlice({
  name: "requestSupporter",
  initialState: requestSupporterEntity.getInitialState(),
  extraReducers(builder) {
    builder
      .addCase(fetchRequestToBecomeSuporter.fulfilled, (state, action) => {
        requestSupporterEntity.setAll(state, action.payload.data)
      })
      .addCase(requestToBecomeSuporter.fulfilled, (state, action) => {
        requestSupporterEntity.addOne(state, {
          ...action.payload.data,
        })
      })
      .addCase(acceptRequestToBecomeSuporter.fulfilled, (state, action) => {
        state.entities[action.payload.data.id].status =
          action.payload.data.status
      })
      .addCase(rejectRequestToBecomeSuporter.fulfilled, (state, action) => {
        state.entities[action.payload.data.id].status =
          action.payload.data.status
      })
  },
})

export const {
  selectAll: selectAllRequestToBecomeSupporter,
  selectById: selectRequestToBecomeSupporterById,
  selectEntities,
  selectIds,
  selectTotal,
} = requestSupporterEntity.getSelectors((state) => state.requestSupporter)

export default requestSupporterSlice.reducer

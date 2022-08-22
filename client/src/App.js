/** @format */
import { Routes, Route } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import UserTicket from "./pages/User/Ticket"
import RequestToBecomeSupporter from "./pages/Admin/RequestToBecomeSupporter"
// import Supporter from "./pages/Admin/Supporter.jsx"
// import Ticket from "./pages/Admin/Ticket.jsx"
// import User from "./pages/Admin/User.jsx"
import AdminDoshboard from "./layout/AdminDashboard"
import UserDashboard from "./layout/UserDashboard"
import BusinessPersonMeditatingLayout from "./layout/BusinessPersonMeditating.layout"
import { ToastContainer } from "react-toastify"
import config from "./config"

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={config.toastTime}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<BusinessPersonMeditatingLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route element={<UserDashboard />}>
          <Route path="/tickets" element={<UserTicket />} />
        </Route>

        {/* protected route */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminDoshboard
              items={[
                {
                  name: "request to become supporter",
                  link: "/admin/dashboard/request-to-become-supporter",
                },
              ]}
            />
          }
        >
          <Route
            path="request-to-become-supporter"
            element={<RequestToBecomeSupporter />}
          />
          {/* <Route path="user" element={<User />} /> */}
          {/* <Route path="ticket" element={<Ticket />} /> */}
          {/* <Route path="supporter" element={<Supporter />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App

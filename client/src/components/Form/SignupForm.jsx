/** @format */
import React from "react"
import { useState } from "react"
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { styled } from "@mui/system"
import { Link } from "react-router-dom"
const Input = styled(TextField)({
  fieldset: {
    borderRadius: "50px",
  },
})

const SignupForm = ({ title, handleSubmitForm }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    handleSubmitForm(formData)
  }

  const handleChange = (event) => {
    setFormData((prevSate) => ({
      ...prevSate,
      [`${event.target.name}`]: event.target.value,
    }))
  }

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }
  return (
    <>
      <Typography
        component="h1"
        textAlign="center"
        variant="h4"
        sx={{
          margin: "3rem 0 2rem 0",
        }}
      >
        {title}
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "80%",
          height: "100%",
          flexDirection: "column",
          margin: "auto 0",
        }}
      >
        <Input
          name="fullname"
          margin="dense"
          onChange={handleChange}
          variant="outlined"
          required
          fullWidth
          label="Enter Your Fullname"
          autoFocus={true}
          type="text"
        />
        <Input
          name="username"
          margin="dense"
          onChange={handleChange}
          variant="outlined"
          required
          fullWidth
          label="Enter Your Username"
          type="text"
        />
        <Input
          name="email"
          margin="dense"
          onChange={handleChange}
          variant="outlined"
          required
          fullWidth
          label="Enter Your Email"
          type="text"
        />
        <Input
          name="password"
          margin="dense"
          onChange={handleChange}
          variant="outlined"
          required
          fullWidth
          label="Enter Your Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          sx={{
            borderColor: "#000957",
            color: "#000957",
            borderRadius: "20px",
            textDecoration: "none",
            margin: "2rem 0 1rem 0",
          }}
          fullWidth
          variant="outlined"
          type="submit"
        >
          SignUp
        </Button>
        <Typography
          variant="p"
          sx={{
            marginBottom: "2rem",
          }}
        >
          Do you have an account <Link to="/login">Please Login</Link>
        </Typography>
      </form>
    </>
  )
}

export default SignupForm

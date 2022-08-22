/** @format */

import { styled } from "@mui/system"
import { Paper } from "@mui/material"

const YellowPaper = styled(Paper)({
  background: "rgba(243, 238, 63, 0.6)",
  borderRadius: {
    md: "63px",
    xs: "none",
  },
  height: "90%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "7%",
})

export default YellowPaper

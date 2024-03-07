import { Typography } from "@mui/material";
import React from "react";

function Text({ text }) {
  return (
    <div>
      <Typography variant="h6" align="start">
        {text}
      </Typography>
    </div>
  );
}

export default Text;

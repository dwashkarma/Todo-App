import { TextField } from "@mui/material";
import React from "react";

function INput({ type, name, handleChange, value }) {
  return (
    <div>
      <TextField
        sx={{ width: "100%" }}
        value={value}
        name={name}
        type={type}
        onChange={handleChange}
      />
    </div>
  );
}

export default INput;

import Button from "@mui/material/Button";
import React from "react";

function ButtonCom({ name, handleClick, color }) {
  return (
    <div>
      <Button variant="contained" color={color} onClick={handleClick}>
        {name}
      </Button>
    </div>
  );
}

export default ButtonCom;

import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";

const MUISelect = ({ id, label, selectArray = [], handleOnChange, value }) => {
  return (
    <TextField
      select
      fullWidth
      variant="standard"
      id={id}
      name={id}
      color="secondary"
      label={label}
      onChange={(e) => handleOnChange(e.target.value)}
      value={value}
    >
      {selectArray.map((element) => (
        <MenuItem key={element} value={element}>
          {element}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default MUISelect;

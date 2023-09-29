import { TextField } from "@mui/material";

const MUITextField = ({ id, required, label, handleOnChange }) => {
  return (
    <TextField
      variant="standard"
      id={id}
      name={id}
      color="secondary"
      label={label}
      required={required}
      onChange={(e) => handleOnChange(e.target.value)}
    />
  );
};

export default MUITextField;

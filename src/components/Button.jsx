import { Button } from "@mui/material";

const MUIButton = ({ text, onClick, disabled }) => {
  return (
    <Button variant="contained" onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};

export default MUIButton;

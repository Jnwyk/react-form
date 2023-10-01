import { Grid } from "@mui/material";

const MUICard = ({ children }) => {
  return (
    <Grid
      container={true}
      direction={"column"}
      alignItems={"center"}
      sx={{ width: "450px", padding: 2, boxShadow: 2 }}
    >
      {children}
    </Grid>
  );
};

export default MUICard;

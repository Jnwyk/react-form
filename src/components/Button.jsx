import { Button } from "@mui/material";

const MUIButton = ({text, onClick}) => {
    return <Button variant="standard" color="secondary" onClick={onClick}>{text}</Button>
}

export default MUIButton
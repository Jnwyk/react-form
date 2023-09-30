import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers';

const MUIDatePicker = ({label, id, handleOnChange}) => {
    return <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker 
        variant="standard"
        id={id}
        name={id}
        color="secondary"
        label={label}
        onChange={(value) => handleOnChange(value)}/>
    </LocalizationProvider>;
}

export default MUIDatePicker;
import "./App.css";
import MUITextField from "./components/TextField";
import MUISelect from "./components/Select";
import MUIButton from "./components/Button";
import { useEffect, useState } from "react";
import MUIDatePicker from "./components/DatePicker";
import MUICard from "./components/Card";
import dayjs from "dayjs";
import validateForm from "./helpers/validateForm";
import { Grid, ThemeProvider, Typography, createTheme } from "@mui/material";
import { pink } from "@mui/material/colors";

const themeSmall = createTheme({
  typography: {
    fontSize: 16,
  },
  palette: {
    primary: {
      main: pink[500],
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: "16px",
          width: "320px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          margin: "16px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 12,
          color: pink[500],
          margin: 0,
        },
      },
    },
  },
});

const themeBig = createTheme({
  typography: {
    fontSize: 32,
  },
  palette: {
    primary: {
      main: pink[500],
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: "16px",
          width: "320px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          margin: "16px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 12,
          color: pink[500],
          margin: 0,
        },
      },
    },
  },
});

function App() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isOverSixty, setIsOverSixty] = useState(false);
  const [errors, setErrors] = useState(["errors"]);
  const [form, setForm] = useState({
    name: "",
    surname: "",
    continent: "",
    birthDate: dayjs(),
  });

  useEffect(() => {
    if (form.birthDate > dayjs()) setIsButtonDisabled(true);
    else setIsButtonDisabled(false);
    const ageMilliseconds = new Date(dayjs() - dayjs(form.birthDate));
    const ageYears = Math.abs(ageMilliseconds.getUTCFullYear() - 1970);
    if (ageYears > 60) setIsOverSixty(true);
    else setIsOverSixty(false);
  }, [form]);

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleOnClick = () => {
    setErrors(validateForm(form));
  };

  return (
    <ThemeProvider theme={isOverSixty ? themeBig : themeSmall}>
      {console.log(form)}
      <MUICard>
        <MUITextField
          required={true}
          label="Imie"
          handleOnChange={(value) => handleInputChange("name", value)}
          id="name"
        />
        {errors.includes("ErrorName") && (
          <Typography>To pole jest wymagane</Typography>
        )}
        <MUITextField
          required={false}
          label="Nazwisko"
          handleOnChange={(value) => handleInputChange("surname", value)}
          id="surname"
        />
        <MUISelect
          label="Kontynent"
          handleOnChange={(value) => handleInputChange("continent", value)}
          id="continent"
          selectArray={[
            "Afryka",
            "Ameryka Południowa",
            "Ameryka Północna",
            "Antarktyda",
            "Australia",
            "Azja",
            "Europa",
          ]}
          value={form.continent}
        />
        {errors.includes("ErrorContinent") && (
          <Typography>Nie spełnione kryteria</Typography>
        )}
        <MUIDatePicker
          label="Data urodzenia"
          id="birthDate"
          handleOnChange={(value) => handleInputChange("birthDate", value)}
        />
        <MUIButton
          onClick={() => handleOnClick()}
          text="Wyslij"
          disabled={isButtonDisabled}
        />
      </MUICard>
      {errors.length === 0 && alert("sukces")}
    </ThemeProvider>
  );
}

export default App;

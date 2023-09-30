import "./App.css";
import MUITextField from "./components/TextField";
import MUISelect from "./components/Select";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import MUIDatePicker from "./components/DatePicker";
import dayjs from "dayjs";

function App() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    continent: "",
    birthDate: dayjs()
  });

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <>
    {console.log(form)}
      <MUITextField
        required={true}
        label="Imie"
        handleOnChange={(value) => handleInputChange("name", value)}
        id="name"
      />
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
      <MUIDatePicker label="Data urodzenia" id="birthDate" handleOnChange={(value) => handleInputChange("birthDate", value)}/>
    </>
  );
}

export default App;

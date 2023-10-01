import "./App.css";
import MUITextField from "./components/TextField";
import MUISelect from "./components/Select";
import MUIButton from "./components/Button";
import { useEffect, useState } from "react";
import MUIDatePicker from "./components/DatePicker";
import dayjs from "dayjs";
import validateForm from "./helpers/validateForm";

function App() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isOverSixty, setIsOverSixty] = useState(false)
  const [form, setForm] = useState({
    name: "",
    surname: "",
    continent: "",
    birthDate: dayjs()
  });

  useEffect(() => {
    if(form.birthDate > dayjs())
      setIsButtonDisabled(true);
    else
      setIsButtonDisabled(false);
    const ageMilliseconds = new Date(dayjs() - dayjs(form.birthDate));
    const ageYears = Math.abs(ageMilliseconds.getUTCFullYear() - 1970);
    if(ageYears > 60) 
      setIsOverSixty(true);
    else 
      setIsOverSixty(false)
  }, [form])

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleOnClick = () => {
    console.log(validateForm(form));
  }

  return (
    <>
    {isOverSixty && console.log("test")}
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
      <MUIButton onClick={() => handleOnClick()} text="Wyslij" disabled={isButtonDisabled} />
    </>
  );
}

export default App;

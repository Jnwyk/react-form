import "./App.css";
import MUITextField from "./components/TextField";
import MUISelect from "./components/Select";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    continent: "",
  });

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <>
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
    </>
  );
}

export default App;

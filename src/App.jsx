import "./App.css";
import MUITextField from "./components/TextField";

function App() {
  return (
    <>
      <MUITextField
        required={true}
        label="Imie"
        handleOnChange={(text) => console.log(text)}
        id="name"
      />
      <MUITextField
        required={false}
        label="Nazwisko"
        handleOnChange={(text) => console.log(text)}
        id="surname"
      />
    </>
  );
}

export default App;

export default function validateForm(form) {
  const errors = [];
  if (form.continent === "Europa" && form.surname.length < 2) {
    errors.push("ErrorContinent");
  }
  if (form.name === "") {
    errors.push("ErrorName");
  }
  return errors;
}

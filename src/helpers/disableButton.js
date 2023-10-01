import dayjs from "dayjs";

export default function disableButton(birthDate) {
  if (birthDate > dayjs()) return true;
  return false;
}

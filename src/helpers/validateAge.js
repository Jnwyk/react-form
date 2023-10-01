import dayjs from "dayjs";

export default function validateAge(birthDate) {
  const ageMilliseconds = new Date(dayjs() - dayjs(birthDate));
  const ageYears = Math.abs(ageMilliseconds.getUTCFullYear() - 1970);
  if (ageYears > 60) return true;
  return false;
}

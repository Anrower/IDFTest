import { HobbyCheked } from "../store/slices/userInfoSlice";

export const getObjectValuesToString = (object: HobbyCheked): string => {
  const keys = Object.keys(object);

  const filtered = keys.filter(function (key) {
    return object[key] === true;
  });

  return filtered.join(', ');
}
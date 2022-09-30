import { HobbyCheked } from "../store/slices/userInfoSlice";

export const getObjectValuesToString = (object: HobbyCheked): string => {
  let result = Object.keys(object);
  return result.join(', ');
}
export const checkRegExp = (field: string, regExp: string): boolean => {
  const reg = new RegExp(regExp);
  return reg.test(field);
}

export const checkLength = (field: string, min: string, max: string): boolean => {
  return ((field.length <= Number(max)) && (field.length >= Number(min)));
}
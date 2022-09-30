import dayjs from 'dayjs'
export const checkRegExp = (field: string, regExp: string): boolean => {
  const reg = new RegExp(regExp);
  return reg.test(field);
}

export const checkMinMax = (field: string | number, min: string, max: string): boolean => {
  if (typeof field === 'string') {
    return ((field.length <= Number(max)) && (field.length >= Number(min)));
  } else {
    return ((field <= Number(max)) && (field >= Number(min)));
  }
}

export const isRequired = (field: string): boolean => {
  return field.length === 0 ? false : true;
}

export const calculateAge = (year: string, month: string, day: string): number => {
  const birth = dayjs(`${year}${month}${day}`);
  const birthMonth = birth.month(),
    birthYear = birth.year(),
    birthDay = birth.day();

  const nowMonth = dayjs().month(),
    nowYear = dayjs().year(),
    nowDay = dayjs().day();

  let result: number = (nowYear - birthYear);
  if (birthMonth < nowMonth) {
    return result;
  } else if (birthMonth === nowMonth) {

    if (birthDay <= nowDay) {
      return result;
    }

  } else {
    result -= 1;
  }
  return result;
}
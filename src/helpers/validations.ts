import { HobbyCheked } from './../store/slices/userInfoSlice';
import dayjs from 'dayjs'
export const checkRegExp = (field: string, regExp: string): boolean => {
  const reg = new RegExp(regExp);
  return reg.test(field);
}

export const isSelect = (obj: HobbyCheked): boolean => {
  const values = Object.values(obj).filter(value => value === true);
  if (values.length > 0) {
    return true;
  }
  return false;
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
    birthDay = birth.get('D');

  const nowMonth = dayjs().month(),
    nowYear = dayjs().year(),
    nowDay = dayjs().get('D');

  let result: number = (nowYear - birthYear);

  if (birthMonth < nowMonth) {
    return result;
  } else if (birthMonth === nowMonth) {
    if (birthDay <= nowDay) {
      return result;
    } else {
      return result -= 1;
    }
  } else {
    return result -= 1;
  }
}

export const checkDayAtFebruary = (day: number, month: string, year: number,): boolean => {
  if (((month === '2') || (month === '02')) && (day >= 28)) {

    const isLeapYear = function (year: number) {
      return !((year % 4) || (!(year % 100) && (year % 400)));
    }(year);

    if (isLeapYear && (day === 29)) {
      return true;
    } else if (isLeapYear && (day === 28)) {
      return true;
    } else {
      return false
    }
  } else {
    return true;
  }
}
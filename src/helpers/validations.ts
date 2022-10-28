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

export const checkValidDate = (day: number, month: number, year: number): boolean => {
  const isValidDay = validDateField('day', day);
  const isValidMonth = validDateField('month', month);
  const isValidYear = validDateField('year', year);

  if (isValidDay && isValidMonth && isValidYear) {
    return checkDayAtMonth(day, month, year);
  }

  return false;
}

const validDateField = (field: string, fieldValue: number): boolean => {
  const nowYear = dayjs().year();

  switch (field) {
    case 'day':
      return ((fieldValue <= 31) && (fieldValue > 0)) ? true : false;
    case 'month':
      return ((fieldValue <= 12) && (fieldValue > 0)) ? true : false;
    case 'year':
      return ((fieldValue < nowYear) && (fieldValue > 0)) ? true : false;
    default:
      return false;
  }

}

const checkDayAtMonth = (day: number, month: number, year: number,): boolean => {
  if (month === 2) {
    const isLeapYear = checkIsLeap(year);
    console.log(isLeapYear);

    if (isLeapYear && (day <= 29)) {
      return true;
    } else if (!isLeapYear && (day <= 28)) {
      return true;
    } else {
      return false
    }

  } else if ([4, 6, 8, 11].includes(month) && (day <= 30)) {
    return true;

  } else if ([1, 3, 5, 7, 8, 10, 12].includes(month) && (day <= 31)) {
    return true;
  }

  return false;
}

const checkIsLeap = (year: number) => {
  return !((year % 4) || (!(year % 100) && (year % 400)));
}
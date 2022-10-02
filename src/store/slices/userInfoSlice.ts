import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userInfoState {
  tel: string
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  sex: string
  birthday: BirthdayDate
  favoriteOcean: string
  hobby: HobbyCheked
};

export interface BirthdayDate {
  day: string
  month: string
  year: string
}

export interface HobbyCheked {
  [key: string]: boolean
}

const initialState: userInfoState = {
  tel: '',
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  sex: '',
  birthday: {
    day: '',
    month: '',
    year: '',
  },
  favoriteOcean: '',
  hobby: {},
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    updateTel(state, action: PayloadAction<string>) {
      state.tel = action.payload;
    },
    updateEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    updatePassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    updateconfirmPassword(state, action: PayloadAction<string>) {
      state.confirmPassword = action.payload;
    },
    updateFistName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    updateLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    initHobby(state, action: PayloadAction<HobbyCheked>) {
      state.hobby = action.payload
    },
    updateHobby(state, action: PayloadAction<HobbyCheked>) {
      state.hobby = { ...state.hobby, ...action.payload }
    },
    updateBirthdayDay(state, action: PayloadAction<string>) {
      state.birthday.day = action.payload;
    },
    updateBirthdayMonth(state, action: PayloadAction<string>) {
      state.birthday.month = action.payload;
    },
    updateBirthdayYear(state, action: PayloadAction<string>) {
      state.birthday.year = action.payload;
    },
    updateFavoriteOcean(state, action: PayloadAction<string>) {
      state.favoriteOcean = action.payload;
    },
    updateSex(state, action: PayloadAction<string>) {
      state.sex = action.payload;
    },
  }
});

export default userInfoSlice.reducer;
export const {
  updateTel,
  updateEmail,
  updatePassword,
  updateconfirmPassword,
  updateBirthdayDay,
  updateBirthdayMonth,
  updateBirthdayYear,
  updateFavoriteOcean,
  updateFistName,
  initHobby,
  updateHobby,
  updateLastName,
  updateSex,
} = userInfoSlice.actions;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISignUpInfoState {
  tel: string
  email: string
  password: string
  confirmPassword: string

};

const initialState: ISignUpInfoState = {
  tel: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const signUpInfoSlice = createSlice({
  name: 'currency',
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

  }
});

export default signUpInfoSlice.reducer;
export const {
  updateTel,
  updateEmail,
  updatePassword,
  updateconfirmPassword
} = signUpInfoSlice.actions;

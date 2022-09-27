import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISignUpInfoState {
  test: null
};

const initialState: ISignUpInfoState = {
  test: null
};

export const signUpInfoSlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    updateTest(state, action: PayloadAction<any>) {
      state.test = action.payload;
    },

  }
});

export default signUpInfoSlice.reducer;
export const {
  updateTest,
} = signUpInfoSlice.actions;

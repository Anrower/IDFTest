import { createSlice } from '@reduxjs/toolkit';

interface IUserInfoModalState {
  isOpen: boolean
};

const initialState: IUserInfoModalState = {
  isOpen: false
}

export const userInfoModalSlice = createSlice({
  name: 'userInfoModal',
  initialState,
  reducers: {
    toggleUserInfoModal(state) {
      state.isOpen = !state.isOpen
    },
  }
});

export default userInfoModalSlice.reducer;
export const {
  toggleUserInfoModal,
} = userInfoModalSlice.actions;
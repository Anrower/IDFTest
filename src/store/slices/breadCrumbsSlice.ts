import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBreadCrumbsState {
  crumbs: string[]
  showActiveCrumb: number
};

const initialState: IBreadCrumbsState = {
  crumbs: [],
  showActiveCrumb: 0,
};

export const breadCrumbsSlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    throwCrumbs(state, action: PayloadAction<string>) {
      !state.crumbs.includes(action.payload) ?
        state.crumbs.push(action.payload) :
        state = state;
    },
    pickUpCrumbs(state) {
      state.crumbs.pop();
    },
    updateShowActiveCrumb(state, action: PayloadAction<number>) {
      state.showActiveCrumb = action.payload
    },
    backPreviousCrumb(state) {
      state.showActiveCrumb -= 1;
    }
  }
});

export default breadCrumbsSlice.reducer;
export const {
  throwCrumbs,
  pickUpCrumbs,
  updateShowActiveCrumb,
  backPreviousCrumb,
} = breadCrumbsSlice.actions;
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import signUpInfoSlice from "./slices/signUpInfoSlice";

const rootReducer = combineReducers({
  signUpInfoSlice,
})

export const store = configureStore({
  reducer: rootReducer
})

//get state store type
export type RootState = ReturnType<typeof store.getState>;
//get store type
export type AppDispatch = typeof store.dispatch
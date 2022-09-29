import { combineReducers, configureStore } from "@reduxjs/toolkit";
import signUpInfoReducer from "./slices/signUpInfoSlice";
import breadCrumbsReducer from './slices/breadCrumbsSlice';

const rootReducer = combineReducers({
  signUpInfoReducer,
  breadCrumbsReducer,
});

export const store = configureStore({
  reducer: rootReducer
});

//get state store type
export type RootState = ReturnType<typeof store.getState>;
//get store type
export type AppDispatch = typeof store.dispatch;
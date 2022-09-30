
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./slices/userInfoSlice";
import breadCrumbsReducer from './slices/breadCrumbsSlice';
import userInfoModalReducer from './slices/userInfoModalSlice';

const rootReducer = combineReducers({
  userInfoReducer,
  breadCrumbsReducer,
  userInfoModalReducer,
});

export const store = configureStore({
  reducer: rootReducer
});

//get state store type
export type RootState = ReturnType<typeof store.getState>;
//get store type
export type AppDispatch = typeof store.dispatch;
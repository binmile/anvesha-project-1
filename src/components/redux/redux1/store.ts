import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice  from "./slices/counter";
import  {authSlice}  from "./slices/authentication";

export const store = configureStore({
  reducer:{
    counter:counterSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
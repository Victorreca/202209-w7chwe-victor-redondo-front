import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { registerReducer } from "./features/userRegisterSlice";

export const store = configureStore({
  reducer: {
    userRegister: registerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

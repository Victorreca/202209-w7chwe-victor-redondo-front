import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLoginData, UserState } from "../../../types";

const userInitialSate: UserState = {
  id: "",
  username: "",
  token: "",
  isLogged: false,
};

const userLoginSlice = createSlice({
  name: "user",
  initialState: userInitialSate,
  reducers: {
    login: (initialState, action: PayloadAction<UserLoginData>) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const userReducer = userLoginSlice.reducer;

export const { loginUser: userLoginActionCreator } = userLoginSlice.actions;

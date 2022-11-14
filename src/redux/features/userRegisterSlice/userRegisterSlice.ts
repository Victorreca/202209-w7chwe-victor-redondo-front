import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userRegister {
  username: string;
  password: string;
  picture: string;
}

export const initialUserRegister: userRegister = {
  username: "",
  password: "",
  picture: "",
};

export const userToRegisterSlice = createSlice({
  name: "userRegisterName",
  initialState: initialUserRegister,
  reducers: {
    register: (initialRegister, action: PayloadAction<userRegister>) => ({
      ...initialRegister,
      ...action.payload,
    }),
  },
});

export const registerReducer = userToRegisterSlice.reducer;

export const { register: registerActionCreator } = userToRegisterSlice.actions;

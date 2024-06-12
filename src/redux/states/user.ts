import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";
import { persistLocalStorage, removeLocalStorage } from "../../helpers";


export const EmptyUserstate: UserInfo = {
  id: 0,
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : EmptyUserstate,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorage<UserInfo>("user", action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage<UserInfo>("user", result);
      return result;
    },
    resetUser: () => {
      removeLocalStorage("user");
      return EmptyUserstate;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;

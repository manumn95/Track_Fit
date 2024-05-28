import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  dailycalories: 0,

};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log(action.payload);
      state.currentUser = action.payload.username;
      localStorage.setItem("track-fit-token", action.payload.token);
      localStorage.setItem("username", action.payload.username);
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("track-fit-token");
    },
    dailyCaloriesData: (state, action) => {
      state.dailycalories = action.payload;
    },
  
  },
});

export const { loginSuccess, logout, dailyCaloriesData } = userSlice.actions;

export default userSlice.reducer;

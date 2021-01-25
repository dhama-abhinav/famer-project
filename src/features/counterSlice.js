import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    value: null,
  },
  reducers: {
    login: (state,action) => {
      state.value = 1;
    },
    logout: state => {
      state.value = null;
    }
  },
});

export const { login, logout,  } = appSlice.actions;

export const selectApp = state => state.app.value;

export default appSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Auth {
  isLogin: boolean | null;
}

const initialState: Auth = {
  isLogin: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLogin: (state, actions: PayloadAction<boolean>) => {
      state.isLogin = actions.payload;
    },
  },
});

export const { setIsLogin } = authSlice.actions;

export const authReducer = authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    //action is the data we get from db when we receive page 
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null; //maybe we had error for prev attempt so we set error as null now
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const {
  signInStart,
  signInSuccess,
  signInFailure
} = userSlice.actions;

export default userSlice.reducer;
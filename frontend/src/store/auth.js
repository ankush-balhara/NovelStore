import { createSlice } from '@reduxjs/toolkit';

// Create a slice for authentication
const authSlice = createSlice({
  name: 'auth',
  initialState:{isLoggedIn:false, role:"user"},
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.role = 'user'; // Reset role to 'user' on logout
    },
    changeRole(state, action) {
      const role = action.payload;
        state.role = role;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload.user;
//         state.role = action.payload.role;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       .addCase(logout.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(logout.fulfilled, (state) => {
//         state.isLoading = false;
//         state.user = null;
//         state.role = null;
//       })
//       .addCase(logout.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       .addCase(changeRole.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(changeRole.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.role = action.payload;
//       })
//       .addCase(changeRole.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       });
//   }
// });

// // Export the actions and the reducer
// export const { actions, reducer } = authSlice;

// export default authSlice.reducer;

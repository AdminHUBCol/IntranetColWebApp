import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    isAuthenticated: false,
    status: "init", //"init" | "fetching" | "error" | "fetched";
};

export const AuthSlice = createSlice({
    name: "FETCH_CURRENT_USER",
    initialState: initialState,
    reducers: {
        showAuth(state, action) {
            state.currentUser = action.payload.currentUser;
            state.isAuthenticated = action.payload.isAuthenticated;
            state.status = action.payload.status;
        },
    },
});

export const { showAuth } = AuthSlice.actions;
export default AuthSlice.reducer;

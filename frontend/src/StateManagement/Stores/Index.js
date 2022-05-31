import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../Slices/AuthSlice";
import allParticipantsSlice from "../Slices/allParticipantsSlice";

const store = configureStore({
    reducer: {
        auth: AuthSlice,
        allParticipants: allParticipantsSlice
    },
});

export default store
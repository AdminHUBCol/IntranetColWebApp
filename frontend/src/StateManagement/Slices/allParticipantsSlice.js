import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    participants: [],
};

export const allParticipantsSlice = createSlice({
    name: "Get All Participants",
    initialState: initialState,
    reducers: {
        showParticipants(state, action) {
            state.participants = action.payload.currentUser;
        },
    },
});

export const { showParticipants } = allParticipantsSlice.actions;
export default allParticipantsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "closed",
  currentUserId: null,
  currentUserName: null,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    openSession: (state, action) => {
      state.status = "opened";
      state.currentUserId = action.payload.id;
      state.currentUserName = action.payload.name;
    },
    closeSession: (state) => {
      state.status = "closed";
      state.currentUserId = null;
      state.currentUserName = null;
    },
  },
});

export const { openSession, closeSession } = sessionSlice.actions;
export default sessionSlice.reducer;

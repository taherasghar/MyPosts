import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice.js";
import sessionReducer from "../features/session/sessionSlice.js";
import usersReducer from "../features/users/usersSlice.js";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    session: sessionReducer,
    users: usersReducer,
  },
});

export default store;

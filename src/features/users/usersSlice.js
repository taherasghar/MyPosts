import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [{ id: nanoid(), name: "taher", password: "taher123" }];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    registerUser: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, password) {
        return {
          payload: {
            id: nanoid(),
            name,
            password,
          },
        };
      },
    },
   
  },
});

export const { registerUser } = usersSlice.actions;
export default usersSlice.reducer;

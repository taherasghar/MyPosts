import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    title: "Artificial Intelligence",
    content:
      "Artificial Intelligence (AI) revolutionizes industries worldwide, streamlining processes and enhancing efficiency. With machine learning algorithms, AI systems analyze vast amounts of data, extracting valuable insights and predictions. From self-driving cars to virtual assistants, AI permeates modern technology, continuously evolving and expanding its capabilities. Ethical considerations and responsible development remain crucial as AI's influence continues to grow in society",
    user: "aliens",
  },
  {
    id: nanoid(),
    title: "Cybersecurity",
    content:
      "In an increasingly digital world, protection against malicious attacks is paramount. Robust cybersecurity measures, including encryption and intrusion detection systems, safeguard sensitive data and infrastructure. Constant vigilance and investment in advanced technologies are crucial for staying ahead of evolving cyber threats. Cybersecurity professionals play a vital role in identifying vulnerabilities and implementing proactive defense strategies.",
    user: "aliens",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdd: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, user) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user,
          },
        };
      },
    },
  },
});

export const { postAdd } = postsSlice.actions;
export default postsSlice.reducer;

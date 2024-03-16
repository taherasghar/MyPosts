/* eslint-disable no-unused-vars */
import React from "react";
import Posts from "./features/posts/Posts";
import AddPost from "./features/posts/AddPost";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./components/Feed";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
    errorElement: <h1>LOL 404 YOU BAGA</h1>,
    children: [
      {
        path: "/",
        element: (
          <>
            <AddPost />
            <Posts />
          </>
        ),
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

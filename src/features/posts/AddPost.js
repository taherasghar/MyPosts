import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdd } from "./postsSlice.js";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
const AddPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const session = useSelector((state) => state.session);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setTimeout(() => {
      setAnchorEl(null);
    }, 1300);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <section>
      <div className="login-container">
        <div className="login-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (session.status === "closed") {
                handleClick(e);
              }
              console.log(session);
              if (title && content && session.status === "opened") {
                dispatch(postAdd(title, content, session.currentUserName));
                setTitle("");
                setContent("");
              }
              if (session.status === "closed") {
              }
            }}
          >
            <h2>Add A New Post</h2>
            <label htmlFor="post-title">Post Title:</label>
            <input
              type="text"
              onChange={onTitleChange}
              value={title}
              id="post-title"
            />
            <label htmlFor="post-content">Post Content:</label>
            <textarea
              onChange={onContentChange}
              value={content}
              id="post-content"
              rows={6}
            />
            <button type="submit" aria-describedby={id} variant="contained">
              Save Post
            </button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              <Typography sx={{ p: 2 }}>Login To Post!</Typography>
            </Popover>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddPost;

import React from "react";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  return posts.map((post) => {
    console.log(post.id);
    return (
      <article key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <h5>{post.user}</h5>
      </article>
    );
  });
};

export default Posts;

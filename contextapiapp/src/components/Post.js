import React from "react";
import Comments from "./Comments";
import { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";
export default function Post() {
  const { post, isAdmin } = useContext(UserInfoContext);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {isAdmin && <button>Delete</button>}
      <Comments />
    </div>
  );
}

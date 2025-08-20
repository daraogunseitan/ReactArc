import React from "react";
import { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";

export default function Comments() {
  const { username, isAdmin } = useContext(UserInfoContext);
  return (
    <div>
      <div>Comments</div>
      <p>Logged in as {username} </p>
      {isAdmin && <button>Edit Comment</button>}
    </div>
  );
}

import React from "react";
import Post from "./Post";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
export default function BlogPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <div>Current Theme is {theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Blog Page</h1>

      <Post />
    </div>
  );
}

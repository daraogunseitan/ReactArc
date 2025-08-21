import React, { useState, useEffect } from "react";
import { createPosts, updatePosts } from "../services/postServices";

export default function PostForm({
  posts,
  setPosts,
  editingPost,
  setEditingPost,
}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setBody(editingPost.body);
    } else {
      setTitle("");
      setBody("");
    }
  }, [editingPost]);
  const handleCreate = (e) => {
    e.preventDefault();
    if (editingPost) {
      editPost();
    } else {
      addPost();
    }
    setTitle("");
    setBody("");
    setEditingPost(null);
  };

  const editPost = () => {
    updatePosts(editingPost.id, { title, body })
      .then((result) => {
        setPosts(
          posts.map((post) => (post.id === editingPost.id ? result.data : post))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addPost = () => {
    createPosts({ title, body })
      .then((result) => {
        setPosts([result.data, ...posts]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleCreate}>
        <div>
          <div>Post Title </div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title goes here..."
          />
        </div>
        <div>Post Body</div>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Post body goes here..."
        />
        <div>
          <button type="submit">
            {editingPost ? "Submit Edit" : "Submit Post"}
          </button>
        </div>
      </form>
    </div>
  );
}

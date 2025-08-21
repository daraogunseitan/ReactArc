import React, { useEffect, useState } from "react";

import { deletePosts, getPosts } from "../services/postServices";
import PostForm from "./PostForm";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    getPosts()
      .then((result) => {
        setPosts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    deletePosts(id)
      .then((result) => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const startEditing = (post) => {
    setEditingPost(post);
  };

  return (
    <div>
      <h1>Posts</h1>
      <PostForm
        posts={posts}
        setPosts={setPosts}
        editingPost={editingPost}
        setEditingPost={setEditingPost}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button
              onClick={() => {
                startEditing(post);
              }}
            >
              Edit Post
            </button>
            <button
              onClick={() => {
                handleDelete(post.id);
              }}
            >
              Delete Post
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

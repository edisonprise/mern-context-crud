import { useState, createContext, useContext, useEffect } from "react";
import {
  getPostsRequests,
  createPostRequest,
  deletePostRequest,
  getPostRequest,
} from "../api/posts";

const PostContext = createContext();
export const usePosts = () => {
  const context = useContext(PostContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const res = await getPostsRequests();
    setPosts(res.data);
    console.log(res);
  };
  const createPost = async (post) => {
    const res = await createPostRequest(post);
    setPosts([...posts, res.data]);
  };

  const deletePost = async (id) => {
    const res = await deletePostRequest(id);
    if (res.status === 204) {
      setPosts(posts.filter((post) => post._id !== id));
    }
  };

  const getPost = async (id) => {
    const res = await getPostRequest(id);
    return res.data;
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <PostContext.Provider
        value={{
          posts,
          getPosts,
          createPost,
          deletePost,
          getPost,
        }}
      >
        {children}
      </PostContext.Provider>
    </div>
  );
};

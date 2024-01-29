import { useState, createContext, useContext, useEffect } from "react";
import { getPostsRequests, createPostRequest } from "../api/posts";

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
        }}
      >
        {children}
      </PostContext.Provider>
    </div>
  );
};

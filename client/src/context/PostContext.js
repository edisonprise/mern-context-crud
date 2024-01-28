import { useState, createContext, useContext, useEffect } from "react";
import { getPostsRequests } from "../api/posts";

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
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <PostContext.Provider
        value={{
          posts,
          getPosts,
        }}
      >
        {children}
      </PostContext.Provider>
    </div>
  );
};

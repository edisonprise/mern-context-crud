import { useState, createContext, useContext } from "react";

const PostContext = createContext();
export const usePosts = () => {
  const context = useContext(PostContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  return (
    <div>
      <PostContext.Provider
        value={{
          posts,
        }}
      >
        {children}
      </PostContext.Provider>
    </div>
  );
};

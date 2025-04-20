import { useEffect, useState } from "react";
import { fetchPosts } from "../utils/fetchPosts";
import { fetchUsers } from "../utils/fetchUsers";

export const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);

      try {
        const posts = await fetchPosts();
        const users = await fetchUsers();

        const finalPosts = posts.map((post) => {
          const user = users.find((user) => user.id === post.userId);
          return {
            ...post,
            userName: user?.name || "Unknown User",
          };
        });
        setPosts(finalPosts);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadPosts();
  }, []);
  return { posts, isLoading, error };
};

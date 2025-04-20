import { ErrorDisplay } from "./components/ErrorDisplay";
import { LoadingDisplay } from "./components/LoadingDisplay";
import { PostsList } from "./components/PostsList";
import { useFetchPosts } from "./hooks/useFetchPosts";

function App() {
  const { posts, isLoading, error } = useFetchPosts();

  if (isLoading) return <LoadingDisplay />;
  if (error) return <ErrorDisplay />;

  return (
    <>
      <div className="h-full bg-black">
        <h1 className="text-2xl font-bold mb-5 text-center text-gray-300 mt-2">
          Home Page
        </h1>
        <PostsList posts={posts} />
      </div>
    </>
  );
}

export default App;

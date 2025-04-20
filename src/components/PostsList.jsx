import { Post } from "./Post";

export function PostsList({ posts }) {
  return (
    <div className="flex flex-col justify-center items-center">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

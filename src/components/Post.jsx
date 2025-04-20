export function Post({ post }) {
  return (
    <div className="w-[500px] p-5 mb-5 bg-gray-900  rounded shadow-md">
      <div className="flex items-center mb-3">
        <h2 className="font-bold text-orange-900">{post.userName}</h2>
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-400">{post.title}</h3>
      <p className="text-gray-400">{post.body}</p>
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/app/api/AxiosClient";

const Posts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Posts</h1>
      <h3 className="text-lg font-bold">{data.length} posts found and axios and RQ is working!</h3>
      <ul className="list-disc">
        {data.map((post: { id: number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

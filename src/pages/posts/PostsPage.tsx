import { useSuspenseQuery } from "@tanstack/react-query";

import { postsQueryOptions } from "./api/PostsOptions";

const PostsPage = () => {
  const postsQuery = useSuspenseQuery(postsQueryOptions);
  const posts = postsQuery.data;

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">It's preloaded posts! OMG</h1>
      <h3 className="text-lg font-bold">{posts.length} posts found and axios and RQ is working!</h3>
      <ul className="list-disc">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;

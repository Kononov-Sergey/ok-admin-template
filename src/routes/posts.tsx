import { postsQueryOptions } from "@/pages/posts/api/PostsOptions";
import PostsPage from "@/pages/posts/PostsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts")({
  loader: ({ context: { queryClient } }) => queryClient.ensureQueryData(postsQueryOptions),
  component: PostsPage,
});

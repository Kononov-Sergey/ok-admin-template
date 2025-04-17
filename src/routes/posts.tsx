import PostsPage from "@/pages/posts/PostsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts")({
  component: PostsPage,
});

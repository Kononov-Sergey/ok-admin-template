import Posts from "@/widgets/posts/Posts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts")({
  component: Posts,
});

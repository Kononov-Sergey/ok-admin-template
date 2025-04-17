import axios from "redaxios";
import { queryOptions } from "@tanstack/react-query";

export interface Post {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const fetchPosts = async () => {
  const response = await apiClient.get<Post[]>("/posts");
  return response.data;
};

export const postsQueryOptions = queryOptions({
  queryKey: ["posts"],
  queryFn: () => fetchPosts(),
});

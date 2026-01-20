import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { getBlogs, getBlogById, createBlog } from "./api";
import type { BlogPost } from "@/types";

export const useBlogs = () =>
  useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

export const useBlog = (id: string | null) =>
  useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id!),
    enabled: !!id,
  });

export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: Partial<BlogPost>) =>
      createBlog(payload),

    onSuccess: (newBlog) => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });

      queryClient.setQueryData(
        ["blog", newBlog.id],
        newBlog
      );
    },
  });
};

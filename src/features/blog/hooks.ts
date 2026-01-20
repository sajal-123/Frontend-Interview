// features/blog/blog.hooks.ts
import { useQuery } from "@tanstack/react-query"
import { getBlogs, getBlogById } from "./api"

export const useBlogs = () =>
  useQuery({ queryKey: ["blogs"], queryFn: getBlogs })

export const useBlog = (id: string | null) =>
  useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id!),
    enabled: !!id,
  })

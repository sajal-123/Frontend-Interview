import { api } from  "@/lib/axios";
import type { BlogPost } from "@/types";

export const getBlogs = async () => {
    const { data } = await api.get('/blogs');
    return data;
};
export const getBlogById = async (id: string) => {
    const { data } = await api.get(`/blogs/${id}`);
    return data;
}

export const createBlog = async (
  payload: Partial<BlogPost>
): Promise<BlogPost> => {
  const blogWithDate = {
    ...payload,
    date: new Date().toISOString(),
  };

  const { data } = await api.post("/blogs", blogWithDate);
  return data;
};

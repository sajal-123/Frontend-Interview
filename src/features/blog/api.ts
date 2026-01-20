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
  const { data } = await api.post("/blogs", payload);
  return data;
};
import { useBlogs } from "@/features/blog/hooks";
import type { BlogPost } from "@/types";
import { cn, timeAgo } from "@/lib/utils";
import React, { useEffect } from "react";
import { BLOG_CATEGORY_ICON } from "@/lib/utils";

interface BlogListProps {
  onSelect: (id: string) => void;
  blogId?: string | null;
}


export function BlogList({ onSelect, blogId }: BlogListProps) {
  const { data, isLoading, isError } = useBlogs();
  useEffect(() => {
    if (!blogId && data && data.length > 0) {
      onSelect(data[0].id);
    }
  }, [blogId, data, onSelect]);

  if (isLoading) return <p className="text-small text-muted-foreground">Loading blogs…</p>;
  if (isError) return <p className="text-small text-destructive">Failed to load blogs</p>;
  if (!data || data.length === 0)
    return <p className="text-small text-muted-foreground">No blogs found</p>;

  return (
    <div
      className="w-full overflow-y-auto space-y-2 scrollbar-none"
      style={{ maxHeight: 'calc(5 * 6rem)' }}
    >
      <h1 className="mb-4 ml-2 h2">Latest Articles</h1>
      {data.map((blog: BlogPost) => (
        <button
          key={blog.id}
          onClick={() => onSelect(blog.id)}
          className={cn(
            "w-full text-left rounded-lg p-4 transition card-hover flex flex-col gap-1 bg-card hover:bg-accent/10",
            blogId === blog.id
              ? "border-l-4 border-[#4F49E1] rounded-l-lg"
              : "hover:border-[#4F49E1] hover:border-1"
          )}
        >
          <div className="flex justify-between items-center">
            {blog.category?.[0] && (
              <div className="flex">
                {BLOG_CATEGORY_ICON[blog.category[0]] && (
                  <span className="mr-2">
                    {React.createElement(BLOG_CATEGORY_ICON[blog.category[0]], { className: "size-4 text-[#4F49E1]" })}
                  </span>
                )}
                <span className="text-xs font-semibold text-[#4F49E1] uppercase">
                  {blog.category[0]}
                </span>
              </div>
            )}
            {blog.date && (
              <span className="text-xs text-muted-foreground">
                {timeAgo(blog.date)}
              </span>
            )}
          </div>

          <h3 className="text-sm font-medium line-clamp-2">{blog.title}</h3>
          {blog.description && (
            <p className="text-xs text-muted-foreground line-clamp-2">{blog.description}</p>
          )}
        </button>
      ))}
    </div>
  );
}

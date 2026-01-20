import { BlogList } from "@/components/blog/BlogList";
import BlogViewer from "@/components/blog/BlogViewer";
import { useState } from "react";

export const Blogs = () => {
  const [blogId, setBlogId] = useState<string | null>(null);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-3/10 max-h-[80vh] overflow-y-auto">
        <BlogList blogId={blogId} onSelect={setBlogId} />
      </div>

      <div className="w-full md:w-7/10">
        <BlogViewer blogId={blogId} />
      </div>
    </div>
  );
};

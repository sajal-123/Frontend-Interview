import { useBlog } from "@/features/blog/hooks";
import type { BlogCategory } from "@/types";
import { Button } from "../ui/button";
import { MessageCircle, ThumbsUp } from "lucide-react";

interface BlogViewerProps {
  blogId: string | null;
}

export default function BlogViewer({ blogId }: BlogViewerProps) {
  const { data, isLoading } = useBlog(blogId);

  // Skeleton loader component
  const Skeleton = () => (
    <article className="space-y-6 animate-pulse">
      {/* Cover Image */}


      {/* Title */}
      <div className="h-8 w-3/4 bg-gray-300 rounded" />

      {/* Categories & Meta */}
      <div className="flex flex-wrap items-center gap-4 text-small">
        <div className="h-5 w-16 bg-gray-300 rounded" />
        <div className="h-5 w-24 bg-gray-300 rounded" />
        <div className="h-5 w-12 bg-gray-300 rounded ml-auto" />
      </div>

      {/* Description */}
      <div className="h-6 w-full bg-gray-300 rounded" />
      <div className="h-6 w-5/6 bg-gray-300 rounded" />

      {/* Share Button */}
      <div className="h-10 w-32 bg-gray-300 rounded" />

      {/* Blog Content */}
      <div className="space-y-4">
        <div className="h-4 w-full bg-gray-300 rounded" />
        <div className="h-4 w-5/6 bg-gray-300 rounded" />
        <div className="h-4 w-3/4 bg-gray-300 rounded" />
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 mt-6 border-t pt-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
        <div className="space-y-1">
          <div className="h-4 w-24 bg-gray-300 rounded" />
          <div className="h-3 w-16 bg-gray-300 rounded" />
        </div>
      </div>
    </article>
  );

  return (
    <main className="card flex-1 p-6 space-y-6">
      {isLoading ? (
        <Skeleton />
      ) : data ? (
        <article className="blog-content space-y-6">
          {/* Cover Image */}
          {data.coverImage && (
            <img
              src={data.coverImage}
              alt={data.title}
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          )}

          {/* Title */}
          <h1 className="h1 sm:text-4xl text-center font-bold">{data.title}</h1>

          <Button>Share Article</Button>
          {/* Categories & Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-lg bg-gray-100 p-4 text-small text-muted-foreground">

            {/* Categories */}
            <section className="flex flex-col items-center gap-2 text-center">
              <h5 className="text-xs font-semibold uppercase tracking-wide">
                Categories
              </h5>
              <div className="flex flex-wrap justify-center gap-2">
                {data.category?.map((cat: BlogCategory) => (
                  <span
                    key={cat}
                    className="rounded font-bold bg-accent/20 px-2 py-1 text-accent-foreground"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </section>

            {/* Date */}
            <section className="flex flex-col items-center gap-2 text-center">
              <h5 className="text-xs font-semibold uppercase tracking-wide">
                Date
              </h5>
              {data.date && (
                <span className="rounded font-bold bg-accent/20 px-2 py-1 text-accent-foreground">
                  {new Date(data.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              )}
            </section>

          </div>


          {/* Description */}
          {data.description && (
            <p className="text-3xl font-semibold">{data.description}</p>
          )}

          {/* Share Button */}

          {/* Blog Content */}
          <div className="space-y-4">
            {data.content?.split("\n\n").map((block: any, idx: string) => {
              if (block.startsWith("- ")) {
                const items = block.split("\n").map((line: any) => line.replace("- ", ""));
                return (
                  <ul key={idx} className="list-disc list-inside">
                    {items.map((item: any, i: any) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (block.startsWith('"') && block.endsWith('"')) {
                return (
                  <blockquote
                    key={idx}
                    className="border-l-4 border-muted-foreground pl-4 italic text-muted-foreground"
                  >
                    {block.replace(/"/g, "")}
                  </blockquote>
                );
              }
              return <p key={idx}>{block}</p>;
            })}
          </div>

          {/* Author */}
          <div className="mt-6 flex items-center justify-between border-t pt-4">

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <img
                src={data.author?.avatar ?? "/ca_monk_logo.jpg"}
                alt={data.author?.name ?? "Author"}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium leading-tight">
                  {data.author?.name ?? "Unknown Author"}
                </p>
                {data.author?.role && (
                  <p className="text-small text-muted-foreground">
                    {data.author.role}
                  </p>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 text-muted-foreground">
              <button
                className="rounded-md p-2 transition hover:bg-accent/20 hover:text-foreground"
                aria-label="Share article"
              >
                <ThumbsUp size={18} />
              </button>

              <button
                className="rounded-md p-2 transition hover:bg-accent/20 hover:text-foreground"
                aria-label="Comments"
              >
                <MessageCircle size={18} />
              </button>
            </div>

          </div>
        </article>
      ) : (
        <div className="empty-state flex h-full items-center justify-center">
          Select a blog to start reading
        </div>
      )}
    </main>
  );
}

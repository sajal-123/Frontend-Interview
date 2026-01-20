import { Blogs } from "@/components/blog/blogs";

const Home = () => {
  return (
    <main className="w-full bg-red-300">
      {/* Hero Section */}
      <section className="bg-background border-b">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            CA Monk Blog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Stay updated with the latest trends in finance, accounting,
            and career growth
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full bg-gray-100 px-8 py-10">
        <Blogs />
      </section>
    </main>
  );
};

export default Home;

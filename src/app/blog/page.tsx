import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Calendar, User, ArrowRight, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Lateef Ismaila",
  description: "Latest Articles, Blog, and Posts from Lateef Ismaila",
};

export default async function BlogPage() {
  const allPosts = await getAllPosts();
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-20 pb-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-4 text-primary">
          Journal
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          Thoughts on Data, <br />
          <span className="text-secondary">Tech & Strategy.</span>
        </h1>
        <p className="mt-6 text-lg text-slate-500 max-w-2xl leading-relaxed">
          A collection of articles where I share my journey in full-stack
          development, deep dives into data architecture, and technical
          tutorials.
        </p>
      </section>

      {/* Blog Feed Section */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        {posts.length === 0 ? (
          <div className="py-20 text-center border-2 border-dashed border-[var(--color-quinary)] rounded-[2rem]">
            <p className="text-slate-400 font-medium">
              No blog posts found yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group relative grid md:grid-cols-12 gap-6 items-start pb-12 border-b border-quinary"
              >
                {/* Date Side Column */}
                <div className="md:col-span-2 pt-1">
                  <time className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                    {post.date}
                  </time>
                </div>

                {/* Content Column */}
                <div className="md:col-span-10">
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 transition-colors group-hover:text-[var(--color-primary)]">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-slate-500 text-lg leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt ||
                      "Dive into this article where we explore modern engineering practices and data-driven development."}
                  </p>

                  <div className="flex items-center gap-6">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center font-bold text-sm transition-all hover:gap-2 text-primary"
                    >
                      Read Full Article{" "}
                      <ArrowRight size={16} className="ml-1" />
                    </Link>

                    <span className="flex items-center text-xs font-semibold text-slate-400 uppercase tracking-tight">
                      <User size={14} className="mr-1" />{" "}
                      {post.author || "Lateef Ismaila"}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* 3. Newsletter / Subscribe (Optional Design Touch) */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-5xl mx-auto p-12 rounded-[3rem] bg-white border border-[var(--color-quinary)] text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Stay in the loop
          </h3>
          <p className="text-slate-500 mb-8">
            Get notified when I publish new articles about Full-Stack & Data.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-3 rounded-full border border-quinary focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-8 py-3 rounded-full font-bold text-white transition-transform hover:scale-105 bg-primary">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

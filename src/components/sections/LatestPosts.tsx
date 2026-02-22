import Link from "next/link";
import PostCard from "@/components/ui/PostCard";
import { getAllPosts } from "@/lib/posts";

type Props = {
  title?: string;
  limit?: number;
};

export default async function LatestPosts({
  title = "Thoughts on Data, Tech & Sports",
  limit = 3,
}: Props) {
  const allPosts = await getAllPosts();

  // Sorting logic
  const posts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);

  if (posts.length === 0) return null;

  return (
    <section id="latest-posts" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-primary">
            Blog
          </h2>
          <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h3>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Global Action Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block border-2 px-10 py-3 rounded-full font-bold transition-all hover:bg-primary hover:text-white border-quinary "
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}

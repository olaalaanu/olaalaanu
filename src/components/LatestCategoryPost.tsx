import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

type Props = {
  category: string;
  title?: string;
  limit?: number; // how many posts to show, default = 1
};

export default async function LatestCategoryPost({
  category,
  title,
  limit = 3,
}: Props) {
  const allPosts = await getAllPosts();

  const posts = allPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );

  if (posts.length === 0) {
    return (
      <section>
        <div className="max-w-2xl mx-auto mb-12">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold pb-2 mb-4 border-b-border border-b-1">
              {title || `Latest in ${category}`}
            </h2>
            <p className="text-gray-600 italic">
              No posts found in {category}.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="max-w-2xl mx-auto mb-12">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold pb-2 mb-2 border-b-border border-b-1">
            {title || `Latest in ${category}`}
          </h2>

          <div className="space-y-6">
            {posts.slice(0, limit).map((post) => (
              <div key={post.slug} className="py-2 my-0 flex gap-2">
                <div className="text-sm text-gray-500">{post.date}</div>
                <Link href={`/blog/${post.slug}`} className="text-primary">
                  {post.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

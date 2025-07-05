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
  limit = 1,
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            {title || `Latest in ${category}`}
          </h2>

          <div className="space-y-6">
            {posts.slice(0, limit).map((post) => (
              <div key={post.slug} className="py-4">
                <h3 className="text-xl font-bold text-blue-600">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                {/* <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

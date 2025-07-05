import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | Lateef Ismaila",
  description: "Lastest Articles, Blog, Posts from Lateef Ismaila",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-2xl min-h-screen mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Latest Blog</h1>

      {posts.length === 0 ? (
        <p className="text-gray-500">No blog posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post.slug} className="mb-4 border-b pb-1 border-dashed">
            <h2 className="text-2xl font-semibold">
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
            </h2>
          </div>
        ))
      )}
    </div>
  );
}

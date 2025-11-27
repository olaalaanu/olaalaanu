import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { markdownToHtml } from "@/lib/markdownToHtml";
import CopyableCode from "@/components/CopyableCode";
import Image from "next/image";
import SocialShare from "@/components/SocialShare";
import Breadcrumbs from "@/components/Breadcrumbs";

// generateStaticParams stays the same
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Await params using the dynamic API format
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: post?.title,
    description: post?.excerpt,
    authors: post?.author ? [{ name: post.author }] : undefined,
  };
}

// Await params here too
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const html = await markdownToHtml(post.content);

  return (
    <main className="min-h-screen">
      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs slug={slug} />
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

        <div className="flex items-center text-sm text-gray-500 mt-1 mb-6">
          {post.avatar && (
            <Image
              width={50}
              height={50}
              src={post.avatar}
              alt={post.author}
              className="w-8 h-8 rounded-full mr-3 border"
            />
          )}
          <div>
            <p className="font-medium">{post.author}</p>
            <p>
              {post.date} • {post.category}
            </p>
          </div>
        </div>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <CopyableCode />
        <SocialShare slug={slug} title={post.title} />
      </article>
    </main>
  );
}

import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { markdownToHtml } from "@/lib/markdownToHtml";
import CopyableCode from "@/components/ui/CopyableCode";
import Image from "next/image";
import SocialShare from "@/components/ui/SocialShare";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Calendar, Tag, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: `${post?.title} | Lateef Ismaila`,
    description: post?.excerpt,
  };
}

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
    <div className="min-h-screen bg-white pb-24">
      {/* 1. Header & Progress Area */}
      <div className="max-w-3xl mx-auto px-6 pt-16">
        <div className="mb-8">
          <Breadcrumbs slug={slug} />
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-bold mb-8 transition-colors hover:gap-2"
          style={{ color: "var(--color-primary)" }}
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Journal
        </Link>

        <div className="space-y-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{
              backgroundColor: "var(--color-quinary)",
              color: "var(--color-tertiary)",
            }}
          >
            {post.category || "Engineering"}
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-slate-500 text-sm border-b border-[var(--color-quinary)] pb-8">
            <div className="flex items-center gap-2">
              {post.avatar && (
                <Image
                  width={32}
                  height={32}
                  src={post.avatar}
                  alt={post.author}
                  className="rounded-full border border-[var(--color-quinary)]"
                />
              )}
              <span className="font-bold text-slate-900">{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              {post.date}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Content Area */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div
          className="prose prose-lg max-w-none 
            prose-headings:text-slate-900 prose-headings:font-extrabold
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-strong:text-slate-900
            prose-blockquote:border-l-[var(--color-primary)] prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
            prose-a:text-[var(--color-primary)] prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-2xl prose-img:border prose-img:border-[var(--color-quinary)]"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* 3. Post Utilities */}
        <div className="mt-16 pt-8 border-t border-[var(--color-quinary)] space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h4 className="font-bold text-slate-900">Share this article</h4>
            <SocialShare slug={slug} title={post.title} />
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-slate-400">
              Technical Snippets
            </h4>
            <CopyableCode />
          </div>
        </div>
      </article>

      {/* 4. Reading Recommendation Suggestion */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <div className="p-8 rounded-[2rem] border-2 border-dashed border-[var(--color-quinary)] text-center">
          <p className="text-slate-500 mb-4 font-medium">
            Enjoyed Lateef's thoughts on {post.category}?
          </p>
          <Link
            href="/contact"
            className="font-bold underline underline-offset-4"
            style={{ color: "var(--color-secondary)" }}
          >
            Let's discuss this project
          </Link>
        </div>
      </div>
    </div>
  );
}

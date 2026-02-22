import Link from "next/link";
import { Calendar, User, ChevronRight } from "lucide-react";

export type PostType = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author?: string;
};

export default function PostCard({ post }: { post: PostType }) {
  return (
    <div className="bg-white rounded-2xl p-8 border transition-all duration-300 flex flex-col group shadow-sm hover:shadow-md h-full border-quinary">
      {/* Meta Info */}
      <div className="flex items-center text-xs text-slate-400 mb-4 space-x-4">
        <span className="flex items-center">
          <Calendar size={14} className="mr-1 text-primary" />
          {post.date}
        </span>
        <span className="flex items-center">
          <User size={14} className="mr-1 text-primary" />
          {post.author || "Lateef"}
        </span>
      </div>

      {/* Title */}
      <h4 className="text-xl font-bold text-slate-900 mb-3 transition-colors leading-tight group-hover:underline underline-offset-4">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h4>

      {/* Excerpt */}
      <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed">
        {post.excerpt}
      </p>

      {/* Read More Link */}
      <Link
        href={`/blog/${post.slug}`}
        className="mt-auto font-bold text-sm flex items-center transition-opacity hover:opacity-80 text-primary"
      >
        Read Article <ChevronRight size={16} className="ml-1" />
      </Link>
    </div>
  );
}

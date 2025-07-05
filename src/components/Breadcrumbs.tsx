import Link from "next/link";

type Props = {
  slug: string;
};

export default function Breadcrumbs({ slug }: Props) {
  const readable = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <nav className="text-sm text-gray-500 mb-4">
      <Link href="/" className="hover:underline">
        Home
      </Link>{" "}
      &raquo;{" "}
      <Link href="/blog" className="hover:underline">
        Blog
      </Link>{" "}
      &raquo; <span className="text-gray-700">{readable}</span>
    </nav>
  );
}

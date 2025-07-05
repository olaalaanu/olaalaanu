import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src", "content", "blog");

export async function getAllPosts() {
  try {
    const files = await fs.readdir(postsDirectory);

    return await Promise.all(
      files.map(async (filename) => {
        const slug = filename.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, filename);
        const fileContents = await fs.readFile(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
          tags: data.tags || [],
          category: data.category || "General",
          author: data.author || "Anonymous",
          avatar: data.avatar || "/avatars/avatar.png",
        };
      })
    );
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    tags: data.tags || [],
    category: data.category || "General",
    author: data.author || "Anonymous",
    avatar: data.avatar || "/avatars/avatar.png",
    content,
  };
}

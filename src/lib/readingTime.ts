export function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  // Remove Markdown formatting and count words
  const noMarkdown = content.replace(/[#*`[\]()]/g, "");
  const words = noMarkdown.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  return `${minutes} min read`;
}

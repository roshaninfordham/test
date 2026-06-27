import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { getBlogBySlug, getBlogSlugs } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = getBlogBySlug(slug);
  } catch {
    notFound();
  }

  const { frontmatter, content } = post;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">{frontmatter.title}</h1>
        <div className="mb-2 text-sm text-muted-foreground">
          {frontmatter.date}
        </div>
        <p className="mb-4 text-muted-foreground">{frontmatter.description}</p>
        <div className="flex flex-wrap gap-2">
          {frontmatter.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </header>
      <MarkdownRenderer content={content} />
    </article>
  );
}

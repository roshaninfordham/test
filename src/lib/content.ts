import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "src", "content");

export interface ProjectFrontmatter {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  image?: string;
}

export interface BlogFrontmatter {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export function getProjectSlugs(): string[] {
  const dir = path.join(contentDir, "projects");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).map((f) => f.replace(/\.mdx?$/, ""));
}

export function getBlogSlugs(): string[] {
  const dir = path.join(contentDir, "blog");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).map((f) => f.replace(/\.mdx?$/, ""));
}

export function getProjectBySlug(slug: string): {
  frontmatter: ProjectFrontmatter;
  content: string;
} {
  const filePath = path.join(contentDir, "projects", `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(raw, slug);
}

export function getBlogBySlug(slug: string): {
  frontmatter: BlogFrontmatter;
  content: string;
} {
  const filePath = path.join(contentDir, "blog", `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(raw, slug);
}

export function getAllProjects(): ProjectFrontmatter[] {
  return getProjectSlugs()
    .map((slug) => getProjectBySlug(slug).frontmatter)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllBlogPosts(): BlogFrontmatter[] {
  return getBlogSlugs()
    .map((slug) => getBlogBySlug(slug).frontmatter)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function parseFrontmatter(
  raw: string,
  slug: string
): { frontmatter: any; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: { slug }, content: raw };
  }

  const frontmatter: Record<string, any> = { slug };
  const lines = match[1].split("\n");
  for (const line of lines) {
    const [key, ...rest] = line.split(":");
    const value = rest.join(":").trim();
    if (value.startsWith("[")) {
      frontmatter[key.trim()] = JSON.parse(
        value.replace(/'/g, '"')
      );
    } else {
      frontmatter[key.trim()] = value;
    }
  }

  return { frontmatter, content: match[2].trim() };
}

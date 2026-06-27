import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import posts from "@/content/blog.json";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
      <p className="mt-2 text-muted-foreground">Thoughts on development, design, and technology.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {posts.map((post, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <CardTitle className="mt-2">{post.title}</CardTitle>
              <CardDescription>{post.excerpt}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">
          No posts yet. Check back soon!
        </p>
      )}
    </div>
  );
}

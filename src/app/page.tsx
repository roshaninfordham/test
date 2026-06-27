import { projects } from "@/content/projects";
import { BentoGrid } from "@/components/bento-grid";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Hi, I&apos;m Roshan Sharma
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Full-stack developer passionate about building beautiful, performant web
          applications with modern technologies.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-semibold">Featured Projects</h2>
        <BentoGrid projects={projects} />
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Skills & Tools</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS",
            "PostgreSQL", "Prisma", "Docker", "GraphQL", "Python",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border bg-secondary px-4 py-1.5 text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Latest Blog Posts</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Building Modern Apps with Next.js 15",
              excerpt: "Exploring the new features in Next.js 15 including the App Router and Server Components.",
              date: "Mar 15, 2026",
            },
            {
              title: "What's New in Tailwind CSS v4",
              excerpt: "A deep dive into Tailwind CSS v4's CSS-first configuration and modern design features.",
              date: "Feb 28, 2026",
            },
          ].map((post) => (
            <article
              key={post.title}
              className="rounded-xl border bg-card p-6 transition-all hover:shadow-md"
            >
              <p className="text-sm text-muted-foreground">{post.date}</p>
              <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

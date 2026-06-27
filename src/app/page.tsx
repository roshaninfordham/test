import { Code2, Palette, Server, Zap } from "lucide-react";
import { BentoGrid } from "@/components/bento-grid";
import { Card, CardContent } from "@/components/ui/card";

const bentoItems = [
  {
    title: "Frontend",
    description: "React, Next.js, TypeScript with modern UI frameworks and responsive design.",
    icon: <Code2 className="h-5 w-5" />,
    className: "md:col-span-2",
  },
  {
    title: "Design",
    description: "Pixel-perfect interfaces with Tailwind CSS and design systems.",
    icon: <Palette className="h-5 w-5" />,
  },
  {
    title: "Backend",
    description: "Scalable APIs with Node.js, Postgres, and cloud infrastructure.",
    icon: <Server className="h-5 w-5" />,
  },
  {
    title: "Performance",
    description: "Optimized builds, lazy loading, and Core Web Vitals.",
    icon: <Zap className="h-5 w-5" />,
    className: "md:col-span-2",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
          Hi, I&apos;m a Developer
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          I build modern web applications with cutting-edge technologies.
          Explore my projects, read my blog, and get in touch.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">What I Do</h2>
        <BentoGrid items={bentoItems} />
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Latest Work</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 font-semibold">Portfolio Website</h3>
              <p className="text-sm text-muted-foreground">
                Built with Next.js 15, React 19, and Tailwind CSS v4.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 font-semibold">Task Manager App</h3>
              <p className="text-sm text-muted-foreground">
                Full-stack kanban board with real-time collaboration.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

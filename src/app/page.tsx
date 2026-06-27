import { BentoGrid } from "@/components/bento-grid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredItems = [
  {
    title: "Web Platform",
    description: "A full-stack web application built with Next.js and TypeScript.",
    href: "/projects",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "AI Toolkit",
    description: "Machine learning pipeline for data analysis.",
    href: "/projects",
    tags: ["Python", "TensorFlow"],
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application with React Native.",
    href: "/projects",
    tags: ["React Native", "Expo"],
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "API Service",
    description: "RESTful API service with Node.js and PostgreSQL.",
    href: "/projects",
    tags: ["Node.js", "PostgreSQL"],
    className: "md:col-span-2 md:row-span-1",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m a Developer
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          I build modern web applications with clean code and great user experiences.
          Explore my work, read my thoughts, and get in touch.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button asChild>
            <Link href="/projects">
              View Projects <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">Read Blog</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Featured Work</h2>
        <BentoGrid items={featuredItems} />
      </section>
    </div>
  );
}

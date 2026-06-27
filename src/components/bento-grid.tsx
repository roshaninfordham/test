import { cn } from "@/lib/utils";
import type { Project } from "@/lib/types";

interface BentoGridProps {
  projects: Project[];
}

const spans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

export function BentoGrid({ projects }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-3">
      {projects.slice(0, 6).map((project, i) => (
        <div
          key={project.id}
          className={cn(
            "group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-lg",
            spans[i % spans.length]
          )}
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                {project.description}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

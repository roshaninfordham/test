import { cn } from "@/lib/utils";

interface BentoItem {
  title: string;
  description: string;
  className?: string;
  icon?: React.ReactNode;
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

export function BentoGrid({ items, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3",
        className
      )}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "group relative rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md",
            item.className
          )}
        >
          {item.icon && (
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {item.icon}
            </div>
          )}
          <h3 className="mb-2 font-semibold">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

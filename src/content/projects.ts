import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    description: "A modern portfolio built with Next.js 15, React 19, and Tailwind CSS v4 featuring a bento grid layout and dark mode.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/roshaninfordham/test",
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-featured online store with product management, cart functionality, and Stripe payment integration.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
  },
  {
    id: "task-manager",
    title: "Task Manager App",
    description: "Collaborative task management tool with real-time updates, drag-and-drop boards, and team workflows.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Real-time weather visualization dashboard with interactive maps and 7-day forecasts.",
    tags: ["React", "D3.js", "OpenWeather API", "Mapbox"],
  },
  {
    id: "ai-chatbot",
    title: "AI Chat Assistant",
    description: "Intelligent chatbot powered by large language models with context-aware conversations.",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description: "Personal fitness tracking app with workout logging, progress charts, and goal setting.",
    tags: ["React Native", "TypeScript", "Supabase", "Chart.js"],
  },
];

# AGENTS.md - Portfolio WebApp Specifications
# This file serves as the system prompt context layer for all coding tasks.
# Read this entire file completely before suggesting or writing any code.

## 1. Project Overview & Tech Stack
* **Purpose**: Personal portfolio web application to showcase projects, skills, and blog posts.
* **Architecture**: Next.js 15 (App Router, Static Site Generation optimized), React 19.
* **Language**: TypeScript (Strict Mode enabled).
* **Styling**: Tailwind CSS v4, Lucide React (Icons).
* **UI Components**: shadcn/ui (Radix Primitives).
* **State Management**: React Context / Native Hooks (No heavy external state engines).
* **Package Manager**: npm

## 2. Terminal Commands
* **Install Dependencies**: `npm install`
* **Run Development Server**: `npm run dev`
* **Production Build Validation**: `npm run build`
* **Linting & Formatting**: `npm run lint`

## 3. Repository Structure
```text
├── src/
│   ├── app/                 # Next.js App Router layout and main pages
│   │   ├── layout.tsx       # Global layout (Navbar, Footer, Providers)
│   │   ├── page.tsx         # Home page (Hero, Bento Grid, Highlights)
│   │   ├── projects/        # Projects grid and detail page routes
│   │   └── blog/            # Markdown blog engine routes
│   ├── components/          # Shared atomic UI assets
│   │   ├── ui/              # shadcn/ui components (Do not manually edit)
│   │   ├── bento-grid.tsx   # Custom dashboard component for projects
│   │   └── theme-toggle.tsx # Dark mode controller
│   ├── content/             # Local Markdown (.mdx) files for project/blog data
│   └── lib/                 # Shared utilities, hooks, and TypeScript types
│       └── utils.ts         # clsx + tailwind-merge configuration
```

## 4. Coding Conventions & Best Practices
* **Component Paradigm**: Use Functional Components with explicit TypeScript interfaces for all component props.
* **Component Generation**: Prioritize reusing pre-installed components inside `src/components/ui/`. Do not create duplicate structural primitives.
* **Styling Hygiene**: Strictly apply Tailwind utility classes. Do not drop raw style sheets or inline HTML styles into components.
* **Async Strategies**: Write standard async/await for data fetching functions inside Server Components. Avoid using legacy `.then()` chaining.
* **Accessibility**: Every image element must provide explicit `alt` tags. Every button layout must have defined `aria-label` tags.

## 5. Explicit Constraints & Boundaries
* **Never Touch**: Do not modify or override configurations in `next.config.js`, `tsconfig.json`, or `.gitignore`.
* **External Libraries**: Do not add third-party styling engines or state tracking plugins (e.g., Bootstrap, Material UI, Redux, Zustand) without confirmation.
* **Mock Architecture**: Implement zero-backend mock data strategies. Store all data lists locally under `src/content/` as Markdown or static JSON.
* **Hydration Protection**: Never use `window` or `document` variables outside of `useEffect` hooks or files designated with the `'use client'` directive.

## 6. Implementation Milestones (Step-by-Step)
1. **Core Layout Setup**: Scaffold navbar, footer, and theme controller toggling fluid dark/light modes.
2. **Homepage Layout**: Build a responsive dashboard layout using a visual Bento Grid UI component.
3. **Data Parser Engine**: Write utility components to load local markdown project sheets into the portfolio views.
4. **Interactive Filters**: Build functional state tags on the projects page to filter layouts by programming stack.
5. **Static Compilation Check**: Validate clean execution of the `npm run build` command without layout or syntax errors.

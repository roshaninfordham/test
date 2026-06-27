export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  repoUrl?: string;
  liveUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

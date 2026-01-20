export type BlogCategory =
  | "FINANCE"
  | "TECH"
  | "CAREER"
  | "EDUCATION"
  | "REGULATIONS"
  | "LIFESTYLE";

export interface BlogPost {
  id: string;
  title: string;
  category: BlogCategory[];
  description: string;
  date: string; 
  coverImage: string;
  content: string;
}

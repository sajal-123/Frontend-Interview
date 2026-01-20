import {
  Landmark,
  Code2,
  Briefcase,
  GraduationCap,
  Scale,
  Heart,
} from "lucide-react";
import { type BlogCategory } from "./types";

export const BLOG_CATEGORY_ICON: Record<
  BlogCategory,
  React.ElementType
> = {
  FINANCE: Landmark,
  TECH: Code2,
  CAREER: Briefcase,
  EDUCATION: GraduationCap,
  REGULATIONS: Scale,
  LIFESTYLE: Heart,
};

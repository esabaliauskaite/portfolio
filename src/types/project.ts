export interface Project {
  order?: number;
  category?: string;
  title: string;
  description: string;
  primaryTags?: string[];
  tags: string[];
  github?: string;
  link?: string;
  image?: string;
  imageAlt?: string;
}

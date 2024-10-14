export type ProjectStatus = 'active' | 'completed' | 'archived';

export interface Project {
  title: string;
  description: string;
  image: string;
  status: ProjectStatus;
  slug: string;
}

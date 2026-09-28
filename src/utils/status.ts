// src/utils/status.ts
import type { ProjectStatus } from '@/types/content';

const STATUS_LABELS: Record<ProjectStatus, string> = {
  completed: 'Completed',
  'in-progress': 'In progress',
  planned: 'Planned',
};

/** Human label for a project status slug, e.g. 'in-progress' -> 'In progress'. */
export const statusLabel = (status: string): string =>
  STATUS_LABELS[status.toLowerCase() as ProjectStatus] ?? status.replace(/-/g, ' ');

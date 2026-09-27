/**
 * @file ProjectCard.tsx
 * @description Project summary card for the home and portfolio grids
 * @module components/features
 *
 * @requires framer-motion - For the hover lift
 * @requires lucide-react - For action icons
 * @requires react-router-dom - For the link to the detail page
 *
 * Features:
 * - Whole card links to the in-site detail page ("Learn more")
 * - External demos and documents open only from their own labelled buttons,
 *   in a new tab
 * - Status shown as a readable label in the card body
 * - Tag display
 *
 * @example
 * ```tsx
 * <ProjectCard project={projectData} />
 * ```
 *
 * @accessibility
 * - One real link per destination, so middle-click, open-in-new-tab and
 *   copy-link all work
 * - The card itself is not a focus stop; its links are
 * - New-tab links say so to screen readers
 * - Decorative icons are hidden from assistive technology
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ProjectBase } from '@/types/content';
import { cardHover } from '@/lib/animations';
import { Badge } from '@/components/ui';

interface ProjectCardProps {
  project: ProjectBase;
  className?: string;
}

const STATUS_LABELS: Record<string, string> = {
  completed: 'Completed',
  'in-progress': 'In progress',
  planned: 'Planned'
};

const statusLabel = (status: string) =>
  STATUS_LABELS[status.toLowerCase()] ?? status.replace(/-/g, ' ');

const isPdf = (url: string) => /\.pdf(?:$|[?#])/i.test(url);

// Same look as the shared Button's primary and outline variants. These are
// plain anchors because "Learn more" has to carry router state and the
// external links have to open in a new tab.
const actionBase =
  'flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2';
const primaryAction = `${actionBase} relative z-10 bg-primary-600 hover:bg-primary-700 text-white`;
const outlineAction = `${actionBase} border-2 border-primary-600 text-primary-600 hover:bg-primary-50`;

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className = ''
}) => {
  const location = useLocation();
  const [imageFit, setImageFit] = useState<'cover' | 'contain'>('contain');

  // Photos and screenshots fill the 16:9 frame; square logos and icons are
  // shown whole on white. Forcing everything to object-contain letterboxed
  // the photos in grey bands and left the white WeYouth logo square sitting
  // inside a grey box.
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
    if (w && h && w / h >= 1.3) setImageFit('cover');
  };

  return (
    <motion.div
      className={`group relative flex flex-col bg-white rounded-xl shadow-lg ${className}`}
      variants={cardHover}
      /*
        whileHover only. whileTap made framer-motion give this div
        tabindex=0 - a focus stop that ignored Enter. The card is clickable
        through the "Learn more" link below instead.
      */
      whileHover="whileHover"
    >
      {/*
        No overlay text or status badge on the image: several thumbnails have
        their own title baked in, and anything laid over them covered it.
      */}
      <div className="aspect-video overflow-hidden rounded-t-xl bg-white border-b border-gray-100">
        <img
          src={project.image}
          alt={project.imageAlt ?? ''}
          onLoad={handleImageLoad}
          className={`w-full h-full ${imageFit === 'cover' ? 'object-cover' : 'object-contain'} transition-transform duration-300 motion-safe:group-hover:scale-105`}
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-2 break-words">
          {project.title}
        </h3>
        {project.status && (
          <div className="mb-3">
            <Badge variant={project.status === 'in-progress' ? 'warning' : 'secondary'}>
              {statusLabel(project.status)}
            </Badge>
          </div>
        )}
        <p className="text-text-secondary mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.map((tag) => (
            <Badge key={tag} variant="primary">
              {tag}
            </Badge>
          ))}
        </div>

        {/*
          mt-auto pins the actions to the bottom so they line up across a row;
          flex-1 lets two buttons share a line when they fit and each take the
          full width when they don't, instead of wrapping ragged.
        */}
        <div className="mt-auto flex flex-wrap gap-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryAction}
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              {project.demoLabel ?? 'Open interactive demo'}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryAction}
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              {project.projectLabel ??
                (isPdf(project.projectUrl) ? 'View document (PDF)' : 'View project')}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
          {project.detailPage && (
            /*
              Stretched link: its ::after covers the whole card, so a click on
              the picture or title is a click on this real link. The external
              buttons above sit over it (relative z-10).
            */
            <Link
              to={`/portfolio/${project.id}`}
              state={{ from: location.pathname + location.search }}
              className={`${outlineAction} after:absolute after:inset-0 after:rounded-xl after:content-['']`}
            >
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
              Learn more
              <span className="sr-only"> about {project.title}</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

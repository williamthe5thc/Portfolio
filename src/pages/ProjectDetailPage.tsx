// src/pages/ProjectDetailPage.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button, BaseCard } from '@/components/ui';
import { fadeInUp } from '@/lib/animations';
import { projects } from '@/content';
import type { ProjectId } from '@/types/content';
import BasePage from './BasePage';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: ProjectId }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    navigate('/portfolio');
    return null;
  }

  // Project Content Section
  const ProjectContent = () => (
    <motion.div 
      variants={fadeInUp}
      className="md:col-span-2"
    >
      <BaseCard>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-auto rounded-lg mb-6"
        />
        <div className="prose max-w-none">
          <h2>About this Project</h2>
          <p>{project.longDescription}</p>

          {project.challenges && (
            <>
              <h3>Challenges</h3>
              <ul>
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </>
          )}

          {project.solutions && (
            <>
              <h3>Solutions</h3>
              <ul>
                {project.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </BaseCard>
    </motion.div>
  );

  // Project Sidebar Section
  const ProjectSidebar = () => (
    <motion.div variants={fadeInUp}>
      <BaseCard>
        <h3 className="font-semibold mb-4">Project Details</h3>
        <dl className="space-y-3">
          <div>
            <dt className="text-text-secondary">Status</dt>
            <dd className="font-medium">{project.status}</dd>
          </div>
          <div>
            <dt className="text-text-secondary">Date</dt>
            <dd className="font-medium">{project.date}</dd>
          </div>
          <div>
            <dt className="text-text-secondary">Category</dt>
            <dd className="font-medium">{project.category}</dd>
          </div>
        </dl>

        <div className="mt-6">
          <h4 className="font-medium mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span 
                key={tag}
                className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {project.projectUrl && (
          <Button
            href={project.projectUrl}
            className="w-full mt-6"
            icon={ExternalLink}
          >
            View Live Project
          </Button>
        )}
      </BaseCard>
    </motion.div>
  );

  return (
    <BasePage
      seo={{
        title: project.title,
        description: project.description,
      }}
      title={project.title}
      subtitle={project.description}
      breadcrumbs={[
        { label: 'Portfolio', href: '/portfolio' },
        { label: project.title, href: `/portfolio/${project.id}` }
      ]}
    >
      <div className="py-12">
        <Button 
          onClick={() => navigate('/portfolio')}
          variant="ghost"
          className="mb-8"
          icon={ArrowLeft}
        >
          Back to Portfolio
        </Button>

        <div className="grid md:grid-cols-3 gap-8">
          <ProjectContent />
          <ProjectSidebar />
        </div>
      </div>
    </BasePage>
  );
};

export default ProjectDetailPage;
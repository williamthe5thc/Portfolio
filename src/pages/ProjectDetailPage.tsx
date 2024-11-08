// src/pages/ProjectDetailPage.tsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button, BaseCard } from '@/components/ui';
import { fadeInUp } from '@/lib/animations';
import { projects } from '@/content';
import type { ProjectId, ProjectBase } from '@/types/content';
import BasePage from './BasePage';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: ProjectId }>();
  const navigate = useNavigate();
  const location = useLocation();
  const initialRender = useRef(true);
  const navigationAttempted = useRef(false);

  // Store project in state to prevent re-fetching
  const [currentProject, setCurrentProject] = useState<ProjectBase | null>(() => {
    const found = projects.find(p => p.id === projectId);
    console.log('Initial project lookup:', { projectId, found: !!found });
    return found || null;
  });

  useEffect(() => {
    console.log('ProjectDetailPage effect running', {
      projectId,
      currentProject: !!currentProject,
      initialRender: initialRender.current,
      pathname: location.pathname
    });

    // Only run on initial render
    if (initialRender.current) {
      initialRender.current = false;

      if (!currentProject && !navigationAttempted.current) {
        console.log('No project found on initial render, navigating to portfolio');
        navigationAttempted.current = true;
        navigate('/portfolio', { replace: true });
      }
    }

    // Cleanup
    return () => {
      console.log('ProjectDetailPage cleanup', { pathname: location.pathname });
    };
  }, [projectId, currentProject, navigate, location]);

  const handleBackClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Back button clicked, navigating to portfolio');
    navigate('/portfolio');
  }, [navigate]);

  // Don't render anything if we don't have a project
  if (!currentProject) {
    console.log('No current project, rendering null');
    return null;
  }

  console.log('Rendering ProjectDetailPage', { 
    projectId, 
    currentProject: currentProject.title,
    pathname: location.pathname 
  });

  return (
    <BasePage
      seo={{
        title: currentProject.title,
        description: currentProject.description,
      }}
      title={currentProject.title}
      subtitle={currentProject.description}
      breadcrumbs={[
        { label: 'Portfolio', href: '/portfolio' },
        { label: currentProject.title, href: `/portfolio/${currentProject.id}` }
      ]}
    >
      <div className="py-12">
        <Button 
          onClick={handleBackClick}
          variant="ghost"
          className="mb-8"
          icon={ArrowLeft}
        >
          Back to Portfolio
        </Button>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-2"
          >
            <BaseCard>
              {currentProject.image && (
                <img 
                  src={currentProject.image} 
                  alt={currentProject.title}
                  className="w-full h-auto rounded-lg mb-6"
                />
              )}
              <div className="prose max-w-none">
                <h2>About this Project</h2>
                <p>{currentProject.longDescription}</p>

                {currentProject.challenges && (
                  <>
                    <h3>Challenges</h3>
                    <ul>
                      {currentProject.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </>
                )}

                {currentProject.solutions && (
                  <>
                    <h3>Solutions</h3>
                    <ul>
                      {currentProject.solutions.map((solution, index) => (
                        <li key={index}>{solution}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </BaseCard>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <BaseCard>
              <h3 className="font-semibold mb-4">Project Details</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-text-secondary">Status</dt>
                  <dd className="font-medium">{currentProject.status}</dd>
                </div>
                <div>
                  <dt className="text-text-secondary">Date</dt>
                  <dd className="font-medium">{currentProject.date}</dd>
                </div>
                <div>
                  <dt className="text-text-secondary">Category</dt>
                  <dd className="font-medium">{currentProject.category}</dd>
                </div>
              </dl>

              <div className="mt-6">
                <h4 className="font-medium mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {currentProject.projectUrl && (
                <Button
                  href={currentProject.projectUrl}
                  className="w-full mt-6"
                  icon={ExternalLink}
                >
                  View Live Project
                </Button>
              )}
            </BaseCard>
          </motion.div>
        </div>
      </div>
    </BasePage>
  );
};

export default React.memo(ProjectDetailPage);
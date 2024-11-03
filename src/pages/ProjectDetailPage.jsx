//src/pages/ProjectDetailPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { 
  SEO,
  PageHeader, 
  SectionContainer,
} from '../components/shared';
import { Button } from '../components/ui/components';
import { projects } from '../data/siteData';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return navigate('/portfolio');
  }

  return (
    <>
      <SEO 
        title={project.title}
        description={project.description}
      />
      
      <div className="min-h-screen">
        <PageHeader
          title={project.title}
          subtitle={project.description}
        />

        <SectionContainer className="py-12">
          <Button 
            onClick={() => navigate('/portfolio')}
            variant="ghost"
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>

          {/* Project Image */}
          <div className="rounded-xl overflow-hidden mb-8">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-auto"
            />
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Main Content */}
              <div className="prose max-w-none">
                <h2>About this Project</h2>
                <p>{project.fullDescription}</p>

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

                {project.results && (
                  <>
                    <h3>Results</h3>
                    <ul>
                      {project.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-text-secondary">Status:</span>
                    <span className="ml-2 font-medium">{project.status}</span>
                  </div>
                  <div>
                    <span className="text-text-secondary">Date:</span>
                    <span className="ml-2 font-medium">{project.date}</span>
                  </div>
                  <div>
                    <span className="text-text-secondary">Category:</span>
                    <span className="ml-2 font-medium">{project.category}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map(tag => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                {project.projectUrl && (
                  <Button
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-6"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </>
  );
};

export default ProjectDetailPage;
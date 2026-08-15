import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, BookOpen, GraduationCap, Download } from 'lucide-react';
import { Button, BaseCard } from '@/components/ui';
import { fadeInUp } from '@/lib/animations';
import BasePage from './BasePage';

const resumeTypes = [
  {
    id: 'instructional',
    title: 'Instructional Design Resume',
    description: 'Highlighting learning design experience, educational technology, and course development',
    icon: BookOpen,
    color: 'bg-primary-500',
    path: '/resume/instructional',
    downloadPath: 'documents/Instructional_Design_Resume.pdf'
  },
  {
    id: 'software',
    title: 'Software Development Resume',
    description: 'Focused on programming skills, software projects, and technical expertise',
    icon: Code,
    color: 'bg-blue-500',
    path: '/resume/software',
    downloadPath: 'documents/Coding_Resume.pdf'
  },
  {
    id: 'academic',
    title: 'Academic Resume',
    description: 'Detailing research experience, publications, and academic achievements',
    icon: GraduationCap,
    color: 'bg-purple-500',
    path: '/resume/academic',
    downloadPath: 'documents/Academic_Resume.pdf'
  }
];

const ResumePage = () => {
  return (
    <BasePage
      seo={{
        title: "Resumes",
        description: "View my specialized resumes for different professional roles"
      }}
      title="Professional Resumes"
      subtitle="Explore my specialized resumes for different roles and industries"
      className="bg-background-light"
    >
      <div className="py-12 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {resumeTypes.map((resumeType) => {
            const Icon = resumeType.icon;
            
            return (
              <motion.div
                key={resumeType.id}
                variants={fadeInUp}
                className="flex flex-col"
              >
                <BaseCard className="flex-1 flex flex-col">
                  <div className={`${resumeType.color} text-white p-4 rounded-t-xl`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-xl font-bold mb-2">{resumeType.title}</h2>
                    <p className="text-text-secondary mb-6 flex-1">
                      {resumeType.description}
                    </p>
                    <div className="space-y-3">
                      <Link 
                        to={resumeType.path}
                        className="block w-full"
                      >
                        <Button
                          variant="primary"
                          className="w-full"
                        >
                          View Online
                        </Button>
                      </Link>
                      <a 
                        href={resumeType.downloadPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <Button
                          variant="outline"
                          className="w-full"
                          icon={Download}
                        >
                          Download PDF
                        </Button>
                      </a>
                    </div>
                  </div>
                </BaseCard>
              </motion.div>
            );
          })}
        </div>
      </div>
      
    </BasePage>
  );
};

export default ResumePage;
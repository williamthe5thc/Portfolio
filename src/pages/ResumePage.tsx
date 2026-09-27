import { motion } from 'framer-motion';
import { Code, BookOpen, GraduationCap, Download } from 'lucide-react';
import { Button, BaseCard } from '@/components/ui';
import { fadeInUp } from '@/lib/animations';
import { getImagePath, documentHref } from '@/utils';
import BasePage from './BasePage';

const resumeTypes = [
  {
    id: 'instructional',
    title: 'Instructional Design Resume',
    description: 'Highlighting learning design experience, educational technology, and course development',
    icon: BookOpen,
    color: 'bg-primary-600',
    path: '/resume/instructional',
    downloadPath: 'documents/Instructional_Design_Resume.pdf'
  },
  {
    id: 'software',
    title: 'Software Development Resume',
    description: 'Focused on programming skills, software projects, and technical expertise',
    icon: Code,
    color: 'bg-primary-600',
    path: '/resume/software',
    downloadPath: 'documents/Coding_Resume.pdf'
  },
  {
    id: 'academic',
    title: 'Academic Resume',
    description: 'Detailing research experience, publications, and academic achievements',
    icon: GraduationCap,
    color: 'bg-primary-600',
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
      <div className="py-12">
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
                  {/* Negative margins cancel BaseCard's p-6 so the strip runs edge to edge */}
                  <div className={`${resumeType.color} text-white p-4 -mx-6 -mt-6 mb-6`}>
                    <Icon className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h2 className="text-xl font-bold mb-2">{resumeType.title}</h2>
                    <p className="text-text-secondary mb-6 flex-1">
                      {resumeType.description}
                    </p>
                    {/*
                      Button renders the link itself. Wrapping a Button in
                      <Link>/<a> nested a <button> inside an anchor: two tab
                      stops per action and invalid interactive content.
                    */}
                    <div className="space-y-3">
                      <Button
                        href={resumeType.path}
                        variant="primary"
                        className="w-full"
                        analyticsLabel={`View Online: ${resumeType.title}`}
                      >
                        View Online
                        <span className="sr-only">: {resumeType.title}</span>
                      </Button>
                      <Button
                        href={documentHref(getImagePath('/' + resumeType.downloadPath))}
                        target="_blank"
                        variant="outline"
                        className="w-full"
                        icon={Download}
                        analyticsLabel={`Download PDF: ${resumeType.title}`}
                      >
                        Download PDF
                        <span className="sr-only">: {resumeType.title}</span>
                      </Button>
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
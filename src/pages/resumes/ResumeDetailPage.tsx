// src/pages/resumes/ResumeDetailPage.tsx
import React from 'react';
import BasePage from '../BasePage';
import ResumeTemplate from '@/components/shared/ResumeTemplate';
import type { ResumeData } from '@/content/resumes';

/** One resume page. The content lives in src/content/resumes.ts. */
const ResumeDetailPage: React.FC<{ resume: ResumeData }> = ({ resume }) => (
  <BasePage
    seo={{ title: resume.title, description: resume.blurb }}
    title={resume.title}
    subtitle={resume.headline.split(' | ').join(' · ')}
    breadcrumbs={[
      { label: 'Resumes', href: '/resume' },
      { label: resume.title, href: `/resume/${resume.slug}` }
    ]}
  >
    <ResumeTemplate resume={resume} />
  </BasePage>
);

export default ResumeDetailPage;

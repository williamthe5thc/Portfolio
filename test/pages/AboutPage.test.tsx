//tests/pages/AboutPage.test.tsx
// src/pages/AboutPage.tsx
import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { 
  SEO,
  Timeline 
} from '@/components/shared';
import { 
  PageHeader,
  Container,
  SectionContainer
} from '@/components/layout';
import { 
  BaseCard, 
  CoreCompetency 
} from '@/components/ui';
import { fadeInUp } from '@/lib/animations';
import { 
  siteConfig,
  education, 
  experience,
  stats,
  competencies 
} from '@/content';

const AboutPage: React.FC = () => {
  // Create memoized experience items
  const experienceItems = React.useMemo(() => {
    return experience.map(exp => ({
      title: exp.title,
      subtitle: exp.company,
      date: exp.period,
      description: exp.highlights.join('. ')
    }));
  }, []);

  return (
    <>
      <SEO 
        title="About"
        description={`Learn about ${siteConfig.author}'s journey, expertise, and approach to instructional design`}
      />
      
      {/* Quick Stats */}
      <SectionContainer className="py-12">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <BaseCard className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-text-secondary">{stat.label}</p>
                </BaseCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </SectionContainer>

      {/* Bio Section */}
      <SectionContainer className="py-20 bg-background">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Competencies Section */}
            <div className="space-y-4">
              {competencies.map((competency, index) => (
                <CoreCompetency 
                  key={index}
                  {...competency}
                />
              ))}
            </div>
          </div>
        </Container>
      </SectionContainer>

      {/* Education & Experience Timeline */}
      <SectionContainer className="py-20">
        <Container>
          <Timeline events={experienceItems} />
          
          {/* Add Education Timeline */}
          <Timeline 
            events={education.degrees.map(deg => ({
              title: deg.degree,
              subtitle: deg.institution,
              date: deg.period,
              description: deg.relevantCourses?.join(', ')
            }))}
          />
        </Container>
      </SectionContainer>
    </>
  );
};

export default AboutPage;
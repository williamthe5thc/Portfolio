// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { 
  SEO,
  PageHeader, 
  SectionContainer,
  Timeline
} from '../components/shared';
import { 
  ResponsiveContainer, 
  ResponsiveGrid, 
  ResponsiveText,
  BaseCard 
} from '../components/ui/components';
import { 
  fadeInUp, 
  staggerContainer, 
  staggerChildren 
} from '../components/shared/animations';
import { 
  siteMetadata,
  education, 
  experience,
  stats,
  coreCompetencies 
} from '../data/siteData';

const CompetencyItem = ({ icon: IconName, title, description, color }) => {
  const Icon = Icons[IconName];
  
  return (
    <motion.div variants={fadeInUp} className="mb-6">
      <div className="flex items-start gap-3 min-h-touch">
        {Icon && <Icon className={`w-6 h-6 ${color || 'text-primary-600'}`} />}
        <div>
          <h3 className="font-semibold text-text-primary mb-1">{title}</h3>
          <p className="text-text-secondary text-sm md:text-base">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const AboutPage = () => {
  const experienceItems = React.useMemo(() => {
    if (!Array.isArray(experience)) return [];
    
    return experience.map(exp => ({
      title: exp?.title || '',
      subtitle: exp?.company || '',
      date: exp?.period || '',
      description: Array.isArray(exp?.highlights) ? exp.highlights.join('. ') : ''
    }));
  }, []);

  return (
    <>
      <SEO 
        title="About"
        description={`Learn about ${siteMetadata.author}'s journey, expertise, and approach to instructional design`}
      />
      
      <div className="min-h-screen">
        <PageHeader
          title="About Me"
          subtitle="Learn about my journey, philosophy, and approach to instructional design"
        />

        {/* Quick Stats */}
        {stats && (
          <SectionContainer className="py-12">
            <ResponsiveContainer>
              <ResponsiveGrid
                cols={{ default: 1, sm: 2, lg: 4 }}
                gap="gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="animate-fade-in"
                  >
                    <BaseCard className="text-center transition-shadow duration-300 hover:shadow-lg">
                      <ResponsiveText
                        size={{ default: '3xl', md: '4xl' }}
                        className="font-bold text-primary-600 mb-2"
                      >
                        {stat.value}
                      </ResponsiveText>
                      <p className="text-text-secondary">{stat.label}</p>
                    </BaseCard>
                  </motion.div>
                ))}
              </ResponsiveGrid>
            </ResponsiveContainer>
          </SectionContainer>
        )}

        {/* Bio Section */}
        <SectionContainer className="py-20 bg-background">
          <ResponsiveContainer>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div 
                variants={fadeInUp}
                className="animate-slide-up"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
                  My Approach
                </h2>
                <div className="prose prose-lg text-text-secondary">
                  <p className="text-base md:text-lg mb-4">
                    With a background in psychology and a passion for education,
                    I bring a unique perspective to instructional design. My 
                    approach combines research-based methodologies with creative
                    solutions to deliver meaningful learning experiences.
                  </p>
                  <p className="text-base md:text-lg">
                    I believe in creating learner-centered experiences that not
                    only convey information effectively but also engage and
                    inspire. My goal is to help organizations and individuals
                    reach their full potential through strategic learning
                    solutions.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="animate-slide-up"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
                  Areas of Expertise
                </h2>
                <div className="space-y-4">
                  {coreCompetencies?.map((competency, index) => (
                    <CompetencyItem key={index} {...competency} />
                  ))}
                </div>
              </motion.div>
            </div>
          </ResponsiveContainer>
        </SectionContainer>

        {/* Education & Experience */}
        <SectionContainer className="py-20">
          <ResponsiveContainer>
            <motion.div className="max-w-4xl mx-auto">
             <motion.h2 
  className="text-2xl md:text-3xl font-bold text-text-primary mb-12 text-center animate-fade-in"
  variants={fadeInUp}
>
  Education & Experience
</motion.h2>
              <Timeline 
                events={experienceItems} 
                className="px-4 sm:px-0"  // Add padding on mobile
              />
            </motion.div>
          </ResponsiveContainer>
        </SectionContainer>
      </div>
    </>
  );
};

export default AboutPage;
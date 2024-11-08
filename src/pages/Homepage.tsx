import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Award } from 'lucide-react';
import BasePage from './BasePage';

import {
  Button,
  BaseCard,
  CoreCompetency,
  JourneyCard,
  SectionContainer
} from '@/components/ui';

import { fadeInUp, staggerContainer } from '@/lib/animations';
import { 
  siteConfig,
  projects,
  education,
  competencies
} from '@/content';

const CoreCompetencyCard = ({ title, description, icon: Icon, color }) => (
  <motion.div variants={fadeInUp}>
    <BaseCard className="h-full transition-shadow duration-300 hover:shadow-lg">
      <div className="flex items-start gap-3 p-6">
        {Icon && <Icon className={`w-6 h-6 ${color || 'text-primary-600'}`} />}
        <div>
          <h3 className="font-semibold text-text-primary mb-1">{title}</h3>
          <p className="text-text-secondary">{description}</p>
        </div>
      </div>
    </BaseCard>
  </motion.div>
);

const FeaturedProjectsCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [projects.length]);

  return (
    <div className="relative overflow-hidden h-96">
      <div 
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {projects.map((project, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <BaseCard className="h-full m-2">
              <img 
                src="/api/placeholder/400/300"
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-text-secondary">{project.description}</p>
              </div>
            </BaseCard>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <BasePage
      seo={{
        title: "Home",
        description: siteConfig.description
      }}
      className="bg-background-light"
    >
      {/* Hero Section with Dynamic Grid Layout */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Section - Takes up 1/3 on large screens */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="/api/placeholder/600/400"
                alt="Hero"
                className="w-full h-96 object-cover" /* Increased height from h-64 to h-96 */
              />
              <div className="p-6">
                <h1 className="text-4xl font-bold text-text-primary mb-4">
                  Designing Learning Expereinces That Drives Results for YOU
                </h1>
                <p className="text-text-secondary text-lg">
                  Building Better Learning Experiences to meet your needs
                </p>
              </div>
            </div>
          </div>

          {/* Dynamic Link Grid - Takes up 2/3 on large screens */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:pl-8"> {/* Added lg:pl-8 for left padding on larger screens */}
            {[
              { href: "/resume", title: "Resume", bg: "bg-blue-500" },
              { href: "/portfolio", title: "Portfolio", bg: "bg-purple-500" },
              { href: "/contact", title: "Contact Me", bg: "bg-green-500" },
              { href: "/projects", title: "Coding Projects", bg: "bg-yellow-500" },
              { href: "/fifth-thing", title: "5th Thing Here", bg: "bg-pink-500" },
              { href: "/tbd", title: "TBD", bg: "bg-indigo-500" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`${item.bg} rounded-xl shadow-lg transition-all duration-300`}
              >
                <Link 
                  to={item.href}
                  className="block w-full h-full p-8 text-white text-xl font-semibold text-center"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <SectionContainer className="py-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Core Competencies
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competencies.map((competency, index) => (
              <CoreCompetencyCard
                key={index}
                {...competency}
              />
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Education and Certifications Section */}
      <SectionContainer className="py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <JourneyCard 
              icon={GraduationCap}
              title="Education"
              items={education.degrees.map(deg => ({
                title: deg.degree,
                subtitle: deg.institution,
                date: deg.period
              }))}
            />
            <JourneyCard
              icon={Award}
              title="Certifications"
              items={education.certifications.map(cert => ({
                title: cert.title,
                subtitle: cert.issuer,
                date: cert.date
              }))}
            />
          </div>
        </div>
      </SectionContainer>

      {/* Featured Projects Carousel */}
      <SectionContainer className="py-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Featured Projects
            </h2>
          </motion.div>
          <FeaturedProjectsCarousel projects={projects.slice(0, 5)} />
        </div>
      </SectionContainer>
    </BasePage>
  );
};

export default HomePage;
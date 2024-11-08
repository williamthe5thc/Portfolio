import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap, Award } from 'lucide-react';
import { Button, BaseCard, JourneyCard, SectionContainer } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { siteConfig, projects, education, competencies } from '@/content';

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

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const displayedProjects = projects.slice(0, 5); // Take first 5 projects

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % displayedProjects.length);
  };

  const previousSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + displayedProjects.length) % displayedProjects.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentProject = displayedProjects[currentIndex];

  return (
    <div className="relative w-full h-[500px] bg-white rounded-xl shadow-lg overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={currentProject.image || "/api/placeholder/800/400"}
            alt={currentProject.title}
            className="w-full h-3/5 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{currentProject.description}</p>
            <div className="flex flex-wrap gap-2">
              {currentProject.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {displayedProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const QuickLinks = () => {
  const links = [
    { href: "/resume", title: "Resume", bg: "bg-blue-500" },
    { href: "/portfolio", title: "Portfolio", bg: "bg-purple-500" },
    { href: "/contact", title: "Contact Me", bg: "bg-green-500" },
    { href: "/about", title: "About Me", bg: "bg-yellow-500" }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {links.map((link, index) => (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className={`${link.bg} rounded-xl shadow-lg transition-all duration-300`}
        >
          <Link
            to={link.href}
            className="block w-full h-full p-6 text-white text-xl font-semibold text-center"
          >
            {link.title}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background-light">
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            {siteConfig.slogan}
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {siteConfig.tagline}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project Carousel - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <ProjectCarousel />
          </div>

          {/* Quick Links - Takes up 1 column */}
          <div className="lg:col-span-1">
            <QuickLinks />
          </div>
        </div>

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
      </main>
    </div>
  );
};

export default HomePage;
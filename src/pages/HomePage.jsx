import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Brain, PlayCircle, Mail, Linkedin } from 'lucide-react';
import { ProjectCard, SectionHeader, SkillCard } from '../components/EnhancedComponents';

const HomePage = () => {
  const projects = [
    {
      title: "Intro to Online Dating",
      description: "Modern e-learning module created with Articulate 360, incorporating AI elements and following ADDIE methodology",
      tags: ["Articulate 360", "AI Integration"],
      status: "Current Project",
      image: "/api/placeholder/400/300"
    },
    {
      title: "How to Teach the Waltz",
      description: "Comprehensive dance education course developed using backwards design and ADDIE model",
      tags: ["Canvas LMS", "Video Production"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Variable Timer App",
      description: "Client-requested Android application featuring custom random interval generation",
      tags: ["Android", "UX Design"],
      image: "/api/placeholder/400/300"
    }
  ];

  const competencies = [
    {
      icon: BookOpen,
      title: "Instructional Design",
      skills: [
        "ADDIE Methodology",
        "Backwards Design",
        "Needs Analysis",
        "Learning Theory"
      ],
      color: "text-blue-600"
    },
    {
      icon: Code,
      title: "Technical Skills",
      skills: [
        "Articulate 360",
        "Canvas LMS",
        "Adobe Suite",
        "Programming"
      ],
      color: "text-green-600"
    },
    {
      icon: Brain,
      title: "Research",
      skills: [
        "Study Design",
        "Data Analysis",
        "Psychology",
        "User Testing"
      ],
      color: "text-purple-600"
    },
    {
      icon: PlayCircle,
      title: "Multimedia",
      skills: [
        "Video Production",
        "Animation",
        "Graphics Design",
        "Interactive Content"
      ],
      color: "text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <motion.section 
        className="py-20 px-4 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <motion.h1 
              className="text-5xl font-bold text-gray-900 mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              W. Jordan Charles
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Instructional Designer specializing in multimedia learning experiences, 
              combining psychology research expertise with modern educational technology
            </motion.p>
            <motion.div 
              className="flex justify-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a 
                href="https://linkedin.com/in/jordan-charles" 
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </motion.a>
              <motion.a 
                href="mailto:williamthe5thc@yahoo.com" 
                className="flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Featured Projects"
            subtitle="Recent instructional design and development work"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Core Competencies"
            subtitle="Key skills and areas of expertise"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {competencies.map((competency) => (
              <SkillCard 
                key={competency.title}
                icon={competency.icon}
                title={competency.title}
                skills={competency.skills}
                color={competency.color}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
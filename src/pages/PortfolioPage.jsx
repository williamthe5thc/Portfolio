import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Code, Brain, PlayCircle, ExternalLink, Github, Mail, Linkedin, Filter } from 'lucide-react';
import { ProjectCard, SectionHeader } from '../components/EnhancedComponents';

const PortfolioPage = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Intro to Online Dating",
      status: "Current Project",
      description: "A comprehensive e-learning module designed to help individuals navigate the modern dating landscape safely and effectively.",
      details: [
        "Developed using Articulate 360 with custom interactions",
        "Integrated AI-powered conversation simulations",
        "Implemented ADDIE methodology throughout development",
        "Created custom graphics and animations",
      ],
      tags: ["Articulate 360", "AI Integration", "ADDIE", "UX Design"],
      image: "/api/placeholder/400/300",
      category: "E-Learning",
      tagColors: {
        "Articulate 360": "blue",
        "AI Integration": "purple",
        "ADDIE": "green",
        "UX Design": "orange"
      }
    },
    {
      id: 2,
      title: "Teaching the Waltz Course",
      description: "A complete dance education program developed for dance instructors to effectively teach the waltz to beginners.",
      details: [
        "Created comprehensive lesson plans and assessments",
        "Produced high-quality instructional videos",
        "Designed interactive quizzes and exercises",
        "Implemented in Canvas LMS with custom modules"
      ],
      tags: ["Canvas LMS", "Video Production", "Curriculum Design", "Assessment"],
      image: "/api/placeholder/400/300",
      category: "Course Development",
      tagColors: {
        "Canvas LMS": "blue",
        "Video Production": "red",
        "Curriculum Design": "green",
        "Assessment": "purple"
      }
    },
    {
      id: 3,
      title: "Variable Timer App",
      description: "A custom Android application developed for a client to generate random time intervals for notifications.",
      details: [
        "Developed using Android Studio and Kotlin",
        "Implemented custom random interval algorithm",
        "Created intuitive user interface",
        "Conducted extensive user testing"
      ],
      tags: ["Android", "Mobile Development", "UX Design", "Client Project"],
      image: "/api/placeholder/400/300",
      category: "Mobile Development",
      tagColors: {
        "Android": "green",
        "Mobile Development": "blue",
        "UX Design": "purple",
        "Client Project": "orange"
      }
    }
  ];

  const categories = ['All', 'E-Learning', 'Course Development', 'Mobile Development'];

  const filteredProjects = selectedTag === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedTag);

  const getTagColor = (tag, colors) => {
    const color = colors[tag];
    switch (color) {
      case 'blue': return 'bg-blue-100 text-blue-600';
      case 'purple': return 'bg-purple-100 text-purple-600';
      case 'green': return 'bg-green-100 text-green-600';
      case 'red': return 'bg-red-100 text-red-600';
      case 'orange': return 'bg-orange-100 text-orange-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
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
              Portfolio
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              A showcase of my instructional design projects, demonstrating expertise 
              in e-learning development, multimedia production, and educational technology.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedTag(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedTag === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                } transition-all duration-200 flex items-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-4 h-4" />
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            <AnimatePresence mode="wait">
              <motion.div 
                className="grid gap-8"
                layout
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="relative overflow-hidden">
                        <motion.img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        {project.status && (
                          <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                            {project.status}
                          </div>
                        )}
                      </div>

                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                        <p className="text-gray-600 mb-6">{project.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            {project.details.map((detail, index) => (
                              <motion.li 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                {detail}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <motion.span 
                              key={tag} 
                              className={`px-3 py-1 rounded-full text-sm ${getTagColor(tag, project.tagColors)}`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        className="py-16 px-4 bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Collaboration?</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always open to discussing new projects and opportunities in instructional design.
          </p>
          <div className="flex justify-center gap-4">
            <motion.a 
              href="mailto:williamthe5thc@yahoo.com"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/jordan-charles"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PortfolioPage;
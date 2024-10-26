import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Brain, PlayCircle, GraduationCap, Award, Lightbulb, Target } from 'lucide-react';
import { SectionHeader, SkillCard, ProjectCard } from '../components/EnhancedComponents';

const AboutPage = () => {
  const coreCompetencies = [
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
        "Python Programming"
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

  const featuredProjects = [
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

  const journeyCards = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        {
          title: "M.Ed. Instructional Design",
          subtitle: "University of Utah",
          date: "Expected 2025"
        },
        {
          title: "B.S. Psychology",
          subtitle: "BYU-Idaho",
          date: "2018"
        }
      ],
      color: "text-blue-600"
    },
    {
      icon: Award,
      title: "Experience",
      items: [
        {
          title: "Instructional Designer",
          subtitle: "NACVA",
          date: "2023"
        },
        {
          title: "Research Assistant",
          subtitle: "Florida State University",
          date: "2018"
        }
      ],
      color: "text-green-600"
    },
    {
      icon: Target,
      title: "Achievements",
      items: [
        {
          title: "Research Conference Finalist",
          subtitle: "Multiple LinkedIn Certifications"
        },
        {
          title: "Automated Content Processing",
          subtitle: "Client Project Success"
        }
      ],
      color: "text-purple-600"
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
              About Me
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              I am a passionate instructional designer dedicated to partnering with organizations 
              to unlock the full potential of their target demographic. I create engaging, 
              results-driven learning experiences that make a real impact.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Professional Journey */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Professional Journey"
            subtitle="My path in instructional design and education"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journeyCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <card.icon className={`w-8 h-8 ${card.color} mb-4`} />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{card.title}</h3>
                <div className="space-y-4">
                  {card.items.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (i * 0.1) }}
                    >
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-gray-600">{item.subtitle}</p>
                      {item.date && <p className="text-sm text-gray-500">{item.date}</p>}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
            {coreCompetencies.map((competency) => (
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

      {/* Teaching Philosophy */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Teaching Philosophy"
            subtitle="My approach to learning and development"
          />
          
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Lightbulb className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <p className="text-gray-600 text-center text-lg leading-relaxed">
              I believe in creating learning experiences that are both engaging and results-driven. 
              By combining psychological principles with modern technology, I develop training solutions 
              that not only transfer knowledge but also inspire lasting behavioral change. My approach 
              focuses on understanding the learner's needs and creating personalized, interactive 
              content that drives real-world application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Featured Projects"
            subtitle="Recent instructional design and development work"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
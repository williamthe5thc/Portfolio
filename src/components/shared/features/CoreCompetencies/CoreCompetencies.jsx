//src/components/shared/CoreCompetencies.jsx:
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  Layout, 
  PenTool, 
  Target,
  Users
} from 'lucide-react';
import { BaseCard } from '../ui/BaseCard';

const competencies = [
  {
    icon: BookOpen,
    title: 'Instructional Design',
    description: 'Creating engaging learning experiences using ADDIE and SAM models',
    color: 'text-blue-600'
  },
  {
    icon: Code,
    title: 'E-Learning Development',
    description: 'Building interactive content with Articulate Storyline and web technologies',
    color: 'text-purple-600'
  },
  {
    icon: Layout,
    title: 'LMS Implementation',
    description: 'Setting up and managing learning management systems',
    color: 'text-green-600'
  },
  {
    icon: PenTool,
    title: 'Content Creation',
    description: 'Developing clear, engaging educational content and assessments',
    color: 'text-orange-600'
  },
  {
    icon: Target,
    title: 'Performance Analysis',
    description: 'Identifying learning needs and measuring training effectiveness',
    color: 'text-red-600'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with SMEs and stakeholders',
    color: 'text-teal-600'
  }
];

const CoreCompetencies = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {competencies.map((competency, index) => {
        const Icon = competency.icon;
        
        return (
          <motion.div
            key={competency.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <BaseCard className="h-full">
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg bg-opacity-10 ${competency.color.replace('text-', 'bg-')}`}>
                  <Icon className={`w-6 h-6 ${competency.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {competency.title}
                  </h3>
                  <p className="text-text-secondary">
                    {competency.description}
                  </p>
                </div>
              </div>
            </BaseCard>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CoreCompetencies;

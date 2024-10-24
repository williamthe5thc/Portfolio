import React from 'react';
import { GithubIcon, Linkedin, Mail, FileText } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">W. Jordan Charles</h1>
            <p className="text-xl text-gray-600 mb-8">Instructional Designer & Learning Experience Developer</p>
            <div className="flex justify-center gap-4">
              <a href="https://linkedin.com/in/jordan-charles" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a href="mailto:williamthe5thc@gmail.com" className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
                <Mail className="w-5 h-5" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card - Waltz Course */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100">
                <img src="/api/placeholder/400/300" alt="How to Waltz Course" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">How to Teach the Waltz</h3>
                <p className="text-gray-600 mb-4">Interactive course designed using ADDIE model, featuring instructional videos and comprehensive learning materials.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">ADDIE</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Video</span>
                </div>
              </div>
            </div>

            {/* Project Card - Variable Timer */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100">
                <img src="/api/placeholder/400/300" alt="Variable Timer App" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Variable Timer App</h3>
                <p className="text-gray-600 mb-4">Android application developed to generate random intervals for user notifications, demonstrating technical implementation skills.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Android</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Mobile</span>
                </div>
              </div>
            </div>

            {/* Project Card - Research */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100">
                <img src="/api/placeholder/400/300" alt="Research Project" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Monopoly Research Study</h3>
                <p className="text-gray-600 mb-4">Research project exploring the relationship between money inequality and empathy, featuring innovative experimental design.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">Research</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Instructional Design</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ADDIE Model</li>
                <li>• Learning Theories</li>
                <li>• Curriculum Development</li>
                <li>• Needs Assessment</li>
              </ul>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Articulate 360</li>
                <li>• Camtasia</li>
                <li>• Python</li>
                <li>• LMS Platforms</li>
              </ul>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Research</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Data Analysis</li>
                <li>• Experimental Design</li>
                <li>• Statistical Analysis</li>
                <li>• Academic Writing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

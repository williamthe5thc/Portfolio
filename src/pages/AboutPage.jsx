
// AboutPage.jsx
import React from 'react';

const AboutPage = () => (
  <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-gray-50 to-gray-100">
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="prose prose-lg">
          <p className="mb-6">
            I am a passionate instructional designer dedicated to partnering with organizations 
            to unlock the full potential of their target demographic (be it the company's 
            employees or the people the non-profit serves). I create engaging, results-driven 
            learning experiences that make a real impact.
          </p>
          {/* Rest of your about content */}
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;

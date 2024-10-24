// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-b from-gray-50 to-gray-100">
    <div className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">W. Jordan Charles</h1>
      <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Graduate Instructional Design Student Seeking Internship to Enhance Employee Potential
      </p>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        Combining psychology research expertise with modern educational technology 
        to create engaging, results-driven learning experiences
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/portfolio" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          View Portfolio
        </Link>
        <Link to="/contact" 
          className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors">
          Get in Touch
        </Link>
      </div>
    </div>
  </div>
);

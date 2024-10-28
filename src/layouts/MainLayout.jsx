// src/layouts/MainLayout.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/shared/Navigation';  // Fix: Match Navigation export type
import { fadeIn } from '../components/shared/animations';  // Fix: Correct animations path
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background-light">
      <Navigation />
      <motion.main
        variants={fadeIn}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.main>
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-text-secondary">
          <p>© {new Date().getFullYear()} W. Jordan Charles. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
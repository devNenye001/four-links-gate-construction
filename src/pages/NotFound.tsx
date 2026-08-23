import React from 'react';
import { motion } from 'framer-motion';

export const NotFound: React.FC = () => {
  return (
    <div className="w-full flex-grow flex flex-col items-center justify-center py-20 px-6 sm:px-8 text-center bg-white">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center max-w-lg"
      >
        {/* Icon Card Container */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-8 border border-gray-200"
        >
          {/* Exclamation Circle */}
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-medium tracking-medium">!</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[#08060D] text-3xl sm:text-4xl font-medium tracking-medium mb-4"
        >
          Page not Found
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[#6B6375] text-[15px] sm:text-base leading-relaxed font-regular tracking-regular mb-8 px-4"
        >
          This page cant be transcribed. It looks like this page has
          <br className="hidden sm:inline" /> left the meeting or maybe it never joined.
        </motion.p>

        {/* Go Home Button (No glows/shadows) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a
            href="/"
            className="inline-flex items-center justify-center px-12 py-3.5 bg-[#FF5C00] hover:bg-[#E05200] text-white font-medium tracking-medium text-[15px] rounded-full transition-colors duration-300"
          >
            Go Home
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

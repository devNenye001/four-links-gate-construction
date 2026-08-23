import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';

export const Projects: React.FC = () => {
  const projectVideos = [
    "/projects1.mp4",
    "/projects2.mp4",
    "/projects3.mp4",
    "/projects4.mp4"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-white flex flex-col"
    >
      {/* 1. Hero Section */}
      <div 
        className="relative w-full h-[360px] md:h-[420px] bg-cover bg-center overflow-hidden flex flex-col justify-between" 
        style={{ backgroundImage: "url('/projects-page-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Transparent header overlay */}
        <Navbar transparent={true} />

        {/* Hero Title & Subtitle */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white pb-20 flex-grow flex flex-col justify-end">
          <h1 className="text-4xl md:text-5xl font-medium tracking-medium mb-4">
            Built With Purpose. Made to Last.
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto font-regular tracking-regular leading-relaxed">
            Explore a selection of projects that reflect our commitment to quality construction, professional execution, and lasting results.
          </p>
        </div>

        {/* Bottom Curved Wave SVG Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[55px] fill-white">
            <path d="M0,90 C300,130 800,130 1200,50 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-12 w-full bg-white relative z-10" />

      {/* 2. Video Showcase Section */}
      <section className="py-16 md:py-20 w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Main Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-gray-900 font-medium tracking-medium text-2xl sm:text-3xl md:text-[32px] leading-tight">
              See What We're Building.
            </h2>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {projectVideos.map((videoSrc, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative aspect-[3/4] overflow-hidden border border-gray-100 bg-gray-50 group shadow-sm transition-transform duration-300 hover:scale-[1.01]"
              >
                <video
                  src={videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

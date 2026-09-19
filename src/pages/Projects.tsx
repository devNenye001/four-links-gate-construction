import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { SEO } from '../components/SEO';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export const Projects: React.FC = () => {
  // All 35 project images from g1.jpeg to g35.jpeg
  const projectImages = Array.from({ length: 35 }, (_, i) => `/g${i + 1}.jpeg`);

  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % projectImages.length);
    }
  }, [activeImageIndex, projectImages.length]);

  const handlePrev = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + projectImages.length) % projectImages.length);
    }
  }, [activeImageIndex, projectImages.length]);

  const handleClose = () => {
    setActiveImageIndex(null);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, handleNext, handlePrev]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-white flex flex-col"
    >
      <SEO 
        title="Our Projects & Work Portfolio | Four Gates Links"
        description="Explore our completed and ongoing building construction, civil engineering, and infrastructure projects across Niger State and Nigeria."
        canonical="https://fourgateslink.com/projects"
        keywords="construction projects minna, building portfolio nigeria, civil engineering works, niger state buildings, four gates links gallery"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ImageGallery',
          '@id': 'https://fourgateslink.com/projects#gallery',
          url: 'https://fourgateslink.com/projects',
          name: 'Four Gates Links Projects & Work Portfolio',
          description: '35 project showcase images of construction, structural engineering, and infrastructure delivered by Four Gates Links Construction Company Nigeria Limited.',
          isPartOf: {
            '@id': 'https://fourgateslink.com/#website'
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://fourgateslink.com/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Projects',
                item: 'https://fourgateslink.com/projects'
              }
            ]
          }
        }}
      />

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
            Explore our complete project photo showcase reflecting our commitment to quality construction, structural integrity, and lasting value across Nigeria.
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

      {/* 2. Photo Gallery Showcase Section */}
      <section className="py-12 md:py-16 w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Main Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-gray-900 font-medium tracking-medium text-2xl sm:text-3xl md:text-[32px] leading-tight">
              See What We're Building.
            </h2>
          </div>

          {/* 35 Images Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectImages.map((imgSrc, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
                onClick={() => setActiveImageIndex(index)}
                className="group relative aspect-[4/3] overflow-hidden border border-gray-100 bg-gray-100 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={imgSrc}
                  alt={`Four Gates Links Construction Project Photo ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                  <div className="self-end">
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="text-xs uppercase tracking-wider font-medium text-white/80">Project {index + 1}</span>
                    <p className="text-sm font-medium">Four Gates Links</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 select-none"
          >
            {/* Top Bar (Counter & Close Button) */}
            <div 
              className="absolute top-4 left-0 right-0 px-6 sm:px-8 flex items-center justify-between z-20 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium">
                Image {activeImageIndex + 1} of {projectImages.length}
              </div>

              <button
                onClick={handleClose}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF5C00] backdrop-blur-md flex items-center justify-center transition-colors text-white"
                aria-label="Close image lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#FF5C00] backdrop-blur-md flex items-center justify-center transition-colors text-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Center Image Container */}
            <div 
              className="relative max-w-5xl max-h-[82vh] flex items-center justify-center z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                src={projectImages[activeImageIndex]}
                alt={`Four Gates Links Construction Project Photo ${activeImageIndex + 1}`}
                className="max-h-[82vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#FF5C00] backdrop-blur-md flex items-center justify-center transition-colors text-white"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

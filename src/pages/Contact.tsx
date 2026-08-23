import React from 'react';
import { motion } from 'framer-motion';
import { Building, PhoneCall, Mail } from 'lucide-react';
import { Navbar } from '../components/Navbar';

export const Contact: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-white flex flex-col"
    >
      {/* Hero Section Container */}
      <div 
        className="relative w-full h-[360px] md:h-[420px] bg-cover bg-center overflow-hidden flex flex-col justify-between" 
        style={{ backgroundImage: "url('/contact-page-banner.jpg')" }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/55 z-0" />

        {/* Absolute overlay Transparent Navbar */}
        <Navbar transparent={true} />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white pb-20 flex-grow flex flex-col justify-end">
          <h1 className="text-4xl md:text-5xl font-medium tracking-medium mb-4">
            Let's Talk About What You're Building.
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto font-regular tracking-regular leading-relaxed">
            We are committed to turning ideas into durable structures, functional spaces, and lasting value.
          </p>
        </div>

        {/* SVG curved wave transition at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[55px] fill-white text-white">
            <path d="M0,90 C300,130 800,130 1200,50 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 lg:gap-12"
        >
          {/* Card 1: Visit Our Office */}
          <div className="flex flex-col items-start md:pr-6 lg:pr-12 md:border-r border-gray-100 last:border-0">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
              <Building className="w-6 h-6 text-[#FF5C00]" />
            </div>
            <h3 className="text-gray-900 font-medium tracking-medium text-lg mb-3">Visit Our Office</h3>
            <p className="text-gray-500 font-regular tracking-regular text-[15px] leading-relaxed">
              Address: Opposite Bahago Plaza, Optima Filing Station, First Floor, Along Paiko Road, Tunga, Minna, Niger State.
            </p>
          </div>

          {/* Card 2: Call Us */}
          <div className="flex flex-col items-start md:px-6 lg:px-12 md:border-r border-gray-100 last:border-0">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
              <PhoneCall className="w-6 h-6 text-[#FF5C00]" />
            </div>
            <h3 className="text-gray-900 font-medium tracking-medium text-lg mb-3">Call Us</h3>
            <div className="flex flex-col gap-1 text-[15px] font-regular tracking-regular">
              <a href="tel:07031033348" className="text-gray-500 hover:text-[#FF5C00] transition-colors">
                0703 103 3348
              </a>
              <a href="tel:07049463239" className="text-gray-500 hover:text-[#FF5C00] transition-colors">
                0704 946 3239
              </a>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="flex flex-col items-start md:pl-6 lg:pl-12 last:border-0">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
              <Mail className="w-6 h-6 text-[#FF5C00]" />
            </div>
            <h3 className="text-gray-900 font-medium tracking-medium text-lg mb-3 break-all">
              talk2fourgateslinks@gmail.com
            </h3>
            <p className="text-gray-500 font-regular tracking-regular text-[15px] leading-relaxed">
              Send us your inquiries anytime, and our team will respond promptly with the information you need.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Embedded Google Map Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-gray-100"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.5531111698433!2d6.542506400000001!3d9.633691599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c71969913c943%3A0xffef179de545a312!2sFOUR%20GATES%20LINKS%20CONSTRUCTION%20COMPANY%20NIGERIA%20LIMITED!5e0!3m2!1sen!2sng!4v1787335936540!5m2!1sen!2sng" 
            className="w-full h-full"
            style={{ border: 0 }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title="Four Gates Links Construction Company Nigeria Limited Location Map"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

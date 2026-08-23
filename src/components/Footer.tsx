import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white mt-auto">
      {/* Final CTA Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden cta-banner-bg bg-cover bg-center min-h-[280px] flex items-center"
        >
          {/* Content Overlay Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 sm:p-12 lg:p-16 items-center relative z-10 text-center lg:text-left">
            {/* Left Col: Heading */}
            <div className="flex flex-col justify-center items-center lg:items-start">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-white text-4xl sm:text-5xl font-medium tracking-medium leading-tight text-center lg:text-left"
              >
                Ready to work<br />Together?
              </motion.h2>
            </div>

            {/* Middle Col: Helmet Image (Spacer for background Helmet SVG on desktop) */}
            <div className="hidden lg:block h-full min-h-[150px]">
              {/* Act as spacer on desktop to make room for helmet graphic in SVG */}
            </div>

            {/* Right Col: Subtext & CTA */}
            <div className="flex flex-col items-center lg:items-end justify-center gap-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center lg:text-right"
              >
                <p className="text-white/95 text-base sm:text-lg font-regular tracking-regular mb-4">
                  Join us today, lets build your dream.
                </p>
                <a
                  href="https://wa.me/2347049463239"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#FF5C00] hover:bg-gray-50 font-medium tracking-medium text-[15px] rounded-full transition-colors duration-300"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-8 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
          {/* Logo Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link to="/">
              <img 
                src="/logo.svg" 
                alt="Four Gates Links Logo" 
                className="h-20 w-auto object-contain mb-6 hover:opacity-85 transition-opacity" 
              />
            </Link>
          </div>

          {/* Company Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-gray-900 font-medium tracking-medium text-base mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { name: 'Services', href: '/services' },
                { name: 'Projects', href: '/projects' },
                { name: 'About Us', href: '/about' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-500 hover:text-[#FF5C00] text-[15px] font-regular tracking-regular transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Column */}
          <div className="lg:col-span-3">
            <h3 className="text-gray-900 font-medium tracking-medium text-base mb-4">Address</h3>
            <div className="flex gap-3 text-gray-500">
              <MapPin className="w-5 h-5 text-[#FF5C00] shrink-0 mt-0.5" />
              <p className="text-[14px] leading-relaxed font-regular tracking-regular">
                Opposite Bahago plaza optima filing station first floor, along Paiko road, Tunga, Minna, Niger State.
              </p>
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-gray-900 font-medium tracking-medium text-base mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-500 items-start">
                <Phone className="w-5 h-5 text-[#FF5C00] shrink-0 mt-0.5" />
                <div className="text-[14px] font-regular tracking-regular">
                  <p className="font-medium text-gray-700">Call Us:</p>
                  <a href="tel:07031033348" className="hover:text-[#FF5C00] transition-colors">07031033348</a>
                  <span className="mx-1.5">|</span>
                  <a href="tel:07049463239" className="hover:text-[#FF5C00] transition-colors">07049463239</a>
                </div>
              </li>
              <li className="flex gap-3 text-gray-500 items-start">
                <Mail className="w-5 h-5 text-[#FF5C00] shrink-0 mt-0.5" />
                <div className="text-[14px] font-regular tracking-regular">
                  <p className="font-medium text-gray-700">Email:</p>
                  <a href="mailto:talk2fourgateslinks@gmail.com" className="hover:text-[#FF5C00] transition-colors break-all">
                    talk2fourgateslinks@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-xs sm:text-[13px] font-regular tracking-regular">
            &copy; 2026 FOUR GATES LINKS CONSTRUCTION COMPANY NIGERIA LIMITED. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

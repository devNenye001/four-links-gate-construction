import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  transparent?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`z-50 ${
        transparent 
          ? 'absolute top-0 left-0 w-full bg-transparent border-transparent' 
          : 'w-full bg-white/95 backdrop-blur-sm sticky top-0 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={transparent ? "/logo-white.png" : "/logo.svg"} 
            alt="Four Gates Links Logo" 
            className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isInternal = link.href.startsWith('/');
            const isActive = isInternal && (
              location.pathname === link.href || 
              (link.href === '/' && location.pathname === '')
            );

            // Active style: highlighted orange. Inactive style: transparent white or default gray
            const activeClass = isActive 
              ? 'text-[#FF5C00] font-medium' 
              : transparent 
                ? 'text-white hover:text-[#FF5C00]' 
                : 'text-gray-600 hover:text-[#FF5C00]';

            return isInternal ? (
              <Link
                key={link.name}
                to={link.href}
                className={`font-regular tracking-regular text-[15px] transition-colors duration-200 ${activeClass}`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className={`font-regular tracking-regular text-[15px] transition-colors duration-200 ${
                  transparent ? 'text-white hover:text-[#FF5C00]' : 'text-gray-600 hover:text-[#FF5C00]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="https://wa.me/2347049463239"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#FF5C00] hover:bg-[#E05200] text-white font-medium tracking-medium text-[15px] rounded-full transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Burger Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none p-2 transition-colors ${
              transparent ? 'text-white hover:text-[#FF5C00]' : 'text-gray-700 hover:text-[#FF5C00]'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden w-full absolute left-0 top-24 shadow-md"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => {
                const isInternal = link.href.startsWith('/');
                const isActive = isInternal && (
                  location.pathname === link.href || 
                  (link.href === '/' && location.pathname === '')
                );

                const activeClass = isActive ? 'text-[#FF5C00] font-medium' : 'text-gray-700 hover:text-[#FF5C00]';

                return isInternal ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-regular tracking-regular transition-colors duration-200 ${activeClass}`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-[#FF5C00] text-lg font-regular tracking-regular transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="https://wa.me/2347049463239"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 bg-[#FF5C00] hover:bg-[#E05200] text-white font-medium tracking-medium rounded-full transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

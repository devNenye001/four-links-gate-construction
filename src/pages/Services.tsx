import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { OrangeSlantedBoxes } from './Home';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceList = [
    {
      num: "01",
      title: "Building Construction & Structural Works",
      desc: "We handle building construction and structural works with a focus on quality, durability, and professional execution—from initial planning to project completion.",
      img: "/building-construction.jpg"
    },
    {
      num: "02",
      title: "Electrical Wiring & Installation",
      desc: "Professional electrical wiring and installation services designed to provide reliable and efficient electrical systems for residential and commercial properties.",
      img: "/electrical-wiring.jpg"
    },
    {
      num: "03",
      title: "Distribution Panels & Switchgear",
      desc: "We install and configure distribution panels and switchgear to support safe and efficient power distribution for your property or project.",
      img: "/distribution-panels.jpg"
    },
    {
      num: "04",
      title: "Project Management & Site Supervision",
      desc: "From planning and coordination to on-site supervision, we help ensure your project is properly managed from start to finish.",
      img: "/project-management.jpg"
    },
    {
      num: "05",
      title: "Renovation & Maintenance",
      desc: "Whether you're upgrading, repairing, or improving your space, we provide renovation and maintenance solutions tailored to your needs.",
      img: "/renovation-maintenance.jpg"
    }
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
        style={{ backgroundImage: "url('/services-page-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Transparent header overlay */}
        <Navbar transparent={true} />

        {/* Hero Title & Subtitle */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white pb-20 flex-grow flex flex-col justify-end">
          <h1 className="text-4xl md:text-5xl font-medium tracking-medium mb-4">
            Services
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto font-regular tracking-regular leading-relaxed">
            From construction and electrical installations to property improvement and flexible homeownership solutions, we provide practical services designed around your needs.
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

      {/* 2. Services Content Section */}
      <section className="py-16 md:py-20 w-full bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Main heading */}
          <div className="text-center mb-16">
            <h2 className="text-gray-900 font-medium tracking-medium text-2xl sm:text-3xl md:text-[32px] leading-tight">
              Everything You Need to Build With Confidence.
            </h2>
          </div>

          {/* List of 5 Services */}
          <div className="flex flex-col gap-8">
            {serviceList.map((service, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center bg-gray-50/40 border border-gray-100 p-5 sm:p-8 md:p-10 transition-shadow duration-300 hover:shadow-sm"
              >
                {/* Text Panel */}
                <div className={`flex flex-col items-start pr-0 md:pr-4 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <span className="text-[#FF5C00] font-bold text-lg mb-1 block">
                    {service.num}
                  </span>
                  <h3 className="text-gray-900 font-medium tracking-medium text-xl sm:text-2xl mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 font-regular tracking-regular text-[15px] leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Image Panel */}
                <div className={`w-full aspect-[16/10] md:aspect-[1.5] overflow-hidden border border-gray-100 bg-gray-100 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Housing on Credit Section */}
      <section className="py-20 md:py-24 w-full bg-white border-t border-gray-100 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-center mb-4">
            <OrangeSlantedBoxes />
            <span className="text-[#FF5C00] font-medium tracking-medium text-sm uppercase">Housing on Credit</span>
          </div>
          <h2 className="text-gray-900 font-medium tracking-medium text-3xl sm:text-4xl mb-4">Build Now. Pay Small Small.</h2>
          <p className="text-gray-500 font-regular tracking-regular text-base max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you're starting a new project, upgrading an existing property, or looking for a path to homeownership, we provide solutions under one roof.
          </p>
          
          {/* Hand off money image */}
          <div className="max-w-md mx-auto mb-10 overflow-hidden bg-gray-50">
            <img 
              src="/pay-small-small-pic.jpeg" 
              alt="Pay Small Small Installment Payment Plan" 
              className="w-full h-auto object-cover"
            />
          </div>

          <Link
            to="/housing-on-credit"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF5C00] hover:bg-[#E05200] text-white font-medium tracking-medium text-[15px] rounded-full transition-colors duration-300"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-gray-400 text-xs mt-3 font-regular tracking-regular">
            Terms, eligibility and payment arrangements apply.
          </p>
        </div>
      </section>

    </motion.div>
  );
};

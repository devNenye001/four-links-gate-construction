import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { OrangeSlantedBoxes, ScrollRevealText } from './Home';
import { 
  Send,
  Eye,
  DollarSign, 
  UserCheck, 
  Users, 
  ArrowRight 
} from 'lucide-react';

export const About: React.FC = () => {
  const aboutDescription = "FOUR GATES LINKS CONSTRUCTION COMPANY NIGERIA LIMITED is a registered construction and engineering firm committed to delivering safe, durable, and cost-effective infrastructure solutions across Niger State and beyond.";

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

  const teamList = [
    { name: "Alh. Mustapha Bello", role: "Founder & Managing Director", img: "/team-member1.png" },
    { name: "Engr. Mustapha Musa", role: "Director of Technical Operations", img: "/team-member2.png" },
    { name: "Mal. Abubakar Umar", role: "Chief Surveyor", img: "/team-member3.png" },
    { name: "Arch. Ibrahim Yusuf", role: "Principal Architect", img: "/team-member4.png" },
    { name: "QS. Amina Dahiru", role: "Lead Quantity Surveyor", img: "/team-member5.png" },
    { name: "Barr. Aisha Mohammed", role: "Legal & Compliance", img: "/team-member6.png" }
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
        style={{ backgroundImage: "url('/about-page-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Transparent header overlay */}
        <Navbar transparent={true} />

        {/* Hero Title & Subtitle */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white pb-20 flex-grow flex flex-col justify-end">
          <h1 className="text-4xl md:text-5xl font-medium tracking-medium mb-4">
            Built on Vision. Driven by Quality.
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto font-regular tracking-regular leading-relaxed">
            We design, build and manage projects with a commitment to precision and durability.
          </p>
        </div>

        {/* Bottom Curved Wave SVG Divider (Sweeps up to the right) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[55px] fill-white">
            <path d="M0,90 C300,130 800,130 1200,50 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-12 w-full bg-white relative z-10" />

      {/* 2. About Us description, mission & vision */}
      <section className="py-16 md:py-20 w-full bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10 flex flex-col items-center gap-4">
            <div className="flex items-center">
              <OrangeSlantedBoxes />
              <span className="text-[#FF5C00] font-medium tracking-medium text-sm uppercase">About Us</span>
            </div>
            <ScrollRevealText text={aboutDescription} />
          </div>

          {/* Mission & Vision grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">
            {/* Mission */}
            <div className="flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-full bg-[#FF5C00] flex items-center justify-center mb-6 text-white">
                <Send className="w-5 h-5 -rotate-45 translate-x-[1px] -translate-y-[1px]" />
              </div>
              <h3 className="text-gray-900 font-medium tracking-medium text-xl mb-3">
                Our <span className="text-[#FF5C00]">Mission</span>
              </h3>
              <p className="text-gray-500 font-regular tracking-regular text-[15px] leading-relaxed">
                To deliver exceptional event experiences through innovation, professionalism, and attention to every detail.
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-full bg-[#FF5C00] flex items-center justify-center mb-6 text-white">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-gray-900 font-medium tracking-medium text-xl mb-3">
                Our <span className="text-[#FF5C00]">Vision</span>
              </h3>
              <p className="text-gray-500 font-regular tracking-regular text-[15px] leading-relaxed">
                To become a leading event management company known for excellence, creativity, and unforgettable experiences.
              </p>
            </div>
          </div>

          {/* Team group photo */}
          <div className="w-full overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
            <img 
              src="/about-page-picture.png" 
              alt="Four Gates Links Construction Team Group Photo" 
              className="w-full h-auto max-h-[480px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Who Build With FOUR GATES LINKS Section */}
      <section className="bg-gray-50/50 border-y border-gray-100 py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <OrangeSlantedBoxes />
            <span className="text-[#FF5C00] font-medium tracking-medium text-sm uppercase">Why Four Gates</span>
          </div>
          <h2 className="text-gray-900 font-medium tracking-medium text-3xl sm:text-4xl mb-16">Who Build With FOUR GATES LINKS?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-[#FF5C00] flex items-center justify-center mb-6">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-gray-900 font-medium tracking-medium text-lg mb-2">Comprehensive Solutions</h3>
              <p className="text-gray-500 font-regular tracking-regular text-[14px] leading-relaxed max-w-xs">
                We work toward practical solutions that provide value for your investment.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-[#FF5C00] flex items-center justify-center mb-6">
                <UserCheck className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-gray-900 font-medium tracking-medium text-lg mb-2">Professional Service</h3>
              <p className="text-gray-500 font-regular tracking-regular text-[14px] leading-relaxed max-w-xs">
                Your project is handled with attention, communication and accountability.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-[#FF5C00] flex items-center justify-center mb-6">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-gray-900 font-medium tracking-medium text-lg mb-2">Trusted Partnerships</h3>
              <p className="text-gray-500 font-regular tracking-regular text-[14px] leading-relaxed max-w-xs">
                Construction, electrical services, project management and real estate solutions in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Services Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 font-medium tracking-medium text-2xl sm:text-3xl md:text-[32px] leading-tight">
              Our Services
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {serviceList.map((service, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center bg-gray-50/40 border border-gray-100 p-5 sm:p-8 md:p-10 transition-shadow duration-300 hover:shadow-sm"
              >
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

      {/* 5. Housing on Credit Section */}
      <section className="py-20 md:py-24 w-full bg-gray-50/50 border-y border-gray-100 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-center mb-4">
            <OrangeSlantedBoxes />
            <span className="text-[#FF5C00] font-medium tracking-medium text-sm uppercase">Housing on Credit</span>
          </div>
          <h2 className="text-gray-900 font-medium tracking-medium text-3xl sm:text-4xl mb-4">Build Now. Pay Small Small.</h2>
          <p className="text-gray-500 font-regular tracking-regular text-base max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you're starting a new project, upgrading an existing property, or looking for a path to homeownership, we provide solutions under one roof.
          </p>
          
          <div className="max-w-md mx-auto mb-10 overflow-hidden border border-gray-100 bg-white">
            <img 
              src="/pay-small-small-pic.jpeg" 
              alt="Pay Small Small Installment Payment Plan" 
              className="w-full h-auto object-cover"
            />
          </div>

          <a
            href="https://wa.me/2347049463239"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF5C00] hover:bg-[#E05200] text-white font-medium tracking-medium text-[15px] rounded-full transition-colors duration-300"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-gray-400 text-xs mt-3 font-regular tracking-regular">
            Terms, eligibility and payment arrangements apply.
          </p>
        </div>
      </section>

      {/* 6. Projects Showcase (3 videos) */}
      <section className="py-20 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="flex items-center mb-4">
              <OrangeSlantedBoxes />
              <span className="text-[#FF5C00] font-medium tracking-medium text-sm uppercase">Projects</span>
            </div>
            <h2 className="text-gray-900 font-medium tracking-medium text-3xl sm:text-4xl">See What We're Building</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["/projects1.mp4", "/projects2.mp4", "/projects3.mp4"].map((videoSrc, idx) => (
              <div 
                key={idx} 
                className="relative aspect-[3/4] overflow-hidden border border-gray-100 bg-gray-50"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Team Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="flex items-center mb-4">
              <OrangeSlantedBoxes />
              <span className="text-[#FF5C00] font-medium tracking-medium text-sm uppercase">Our Team</span>
            </div>
            <h2 className="text-gray-900 font-medium tracking-medium text-3xl sm:text-4xl">The People Behind the Brand</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamList.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-full aspect-[4/5] overflow-hidden border border-gray-100 mb-5 bg-gray-50">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-gray-900 font-medium tracking-medium text-lg mb-1">{member.name}</h3>
                <p className="text-gray-400 font-regular tracking-regular text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

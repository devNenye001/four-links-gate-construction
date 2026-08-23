import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Users, 
  Star, 
  ArrowRight,
  UserCheck,
  DollarSign
} from 'lucide-react';
import { Navbar } from '../components/Navbar';

// 2 Orange Slanted Boxy Stuff (rhombus/skewed badge icon) next to section tags
export const OrangeSlantedBoxes: React.FC = () => {
  return (
    <div className="inline-flex gap-1 items-center mr-2">
      <span className="w-3 h-3 bg-[#FF5C00] transform -skew-x-12 inline-block rounded-sm" />
      <span className="w-1.5 h-3 bg-[#FF5C00] transform -skew-x-12 inline-block rounded-sm" />
    </div>
  );
};

// Custom Typing animation cycling through divisions
export const TypingText: React.FC = () => {
  const words = ["Construction", "Engineering", "Real Estate"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const activeWord = words[currentWordIndex];
    let timer: number;

    if (isDeleting) {
      timer = window.setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length - 1));
        setTypingSpeed(75);
      }, typingSpeed);
    } else {
      timer = window.setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }

    if (!isDeleting && currentText === activeWord) {
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      setTypingSpeed(200);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <span className="text-[#FF5C00] border-r-2 border-[#FF5C00] pr-1 font-medium select-text">
      {currentText}
    </span>
  );
};

// Scroll Reveal Text Component for About section description
interface ScrollRevealProps {
  text: string;
}

export const ScrollRevealText: React.FC<ScrollRevealProps> = ({ text }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start 85%", "end 50%"]
  });

  const words = text.split(" ");

  return (
    <div ref={elementRef} className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-2 gap-y-1 md:gap-y-2 px-4 leading-tight sm:leading-snug md:leading-normal text-center">
      {words.map((word, index) => {
        const start = index / words.length;
        const end = (index + 1.5) / words.length;
        
        // Dynamically transition word color from light-grey (unrevealed) to dark-grey/black (revealed) on scroll
        const color = useTransform(
          scrollYProgress,
          [Math.min(start, 0.9), Math.min(end, 1.0)],
          ["#D1D5DB", "#111827"]
        );

        return (
          <motion.span 
            key={index} 
            style={{ color }}
            className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-medium select-text"
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};

// Autoplay Muted Hover Video Component (Straight borders)
interface HoverVideoProps {
  src: string;
  poster?: string;
}

const HoverVideo: React.FC<HoverVideoProps> = ({ src, poster }) => {
  return (
    <div className="relative aspect-[3/4] overflow-hidden border border-gray-100 bg-gray-50 group">
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export const Home: React.FC = () => {
  const tickerItems = [
    "Real Estate",
    "Housing on Credit",
    "Construction",
    "Electrical Solutions"
  ];

  const aboutDescription = "FOUR GATES LINKS CONSTRUCTION COMPANY NIGERIA LIMITED is a registered construction and engineering firm committed to delivering safe, durable, and cost-effective infrastructure solutions across Niger State and beyond.";

  const testimonialList = [
    {
      name: "David Ajah",
      quote: "The electrical installation was completed efficiently and professionally. We appreciated their attention to detail and commitment to doing the job properly."
    },
    {
      name: "Amina Bello",
      quote: "The structural building construction work was carried out to the highest standards. Excellent communication and attention to detail throughout the process."
    },
    {
      name: "Ibrahim Musa",
      quote: "Their real estate services are fantastic. They guided us patiently and helped us secure the perfect property within our budget."
    },
    {
      name: "Elizabeth Ndaji",
      quote: "Superb project management. The site supervision was thorough, and they delivered high-quality results within our timeline."
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
      <div className="relative w-full h-[580px] md:h-[650px] bg-cover bg-center overflow-hidden flex flex-col justify-between" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Absolute transparent header overlay */}
        <Navbar transparent={true} />

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 flex-grow flex flex-col items-center justify-center text-center text-white pt-28 pb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-medium tracking-medium leading-tight mb-5 max-w-3xl">
            Your Trusted Partner for <TypingText />
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg font-regular tracking-regular max-w-3xl leading-relaxed mb-8 px-4">
            From construction and engineering to flexible homeownership solutions, FOUR GATES LINKS delivers quality, reliability, and spaces built to last.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#projects-showcase"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/60 text-white font-medium tracking-medium text-[15px] rounded-full transition-colors duration-300"
            >
              View Projects
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#FF5C00] hover:bg-[#E05200] text-white font-medium tracking-medium text-[15px] rounded-full transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Slanted Scrolling Ticker Banner */}
      <div className="relative w-full z-20 pointer-events-none h-16 overflow-visible -mt-8">
        <div 
          className="absolute left-[-5%] w-[110%] bg-[#051C3F] py-4 transform rotate-[-2deg] flex items-center overflow-hidden shadow-lg border-t border-b border-blue-950/20"
          style={{ pointerEvents: 'auto' }}
        >
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
            {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-8 text-white font-medium tracking-medium text-sm md:text-base">
                <span className="text-white/95">{item}</span>
                <span className="text-[#FF5C00] font-bold text-lg">➔</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer to push content down past the rotated slanted ticker overlay */}
      <div className="h-14 w-full bg-white relative z-10" />

      {/* 3. About Us Section (with Scroll Reveal) */}
      <section id="about" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-24 w-full text-center flex flex-col items-center gap-6">
        <div className="flex items-center justify-center">
          <OrangeSlantedBoxes />
          <span className="text-[#FF5C00] font-medium tracking-medium text-sm uppercase">About Us</span>
        </div>
        
        {/* Scroll reveal text effect */}
        <ScrollRevealText text={aboutDescription} />

        <div className="mt-4">
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF5C00] hover:bg-[#E05200] text-white font-medium tracking-medium text-[15px] rounded-full transition-colors duration-300"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 4. Services Section (Mockup content & straight borders) */}
      <section id="services" className="bg-white border-y border-gray-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center mb-3">
                <OrangeSlantedBoxes />
                <span className="text-[#FF5C00] font-medium tracking-medium text-sm uppercase">Services</span>
              </div>
              <h2 className="text-gray-900 font-medium tracking-medium text-3xl sm:text-4xl">
                Everything You Need to Build,<br className="hidden sm:inline" /> Improve & Maintain.
              </h2>
            </div>
            <p className="text-gray-500 font-regular tracking-regular text-[15px] max-w-md leading-relaxed">
              Whether you're starting a new project, upgrading an existing property, or looking for a path to homeownership, we provide solutions under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Card 1: Building */}
            <div className="bg-gray-50/50 p-8 border border-gray-100 flex flex-col items-start transition-colors duration-300">
              <div className="w-12 h-12 flex items-center justify-center mb-6 text-gray-900">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-gray-900 font-medium tracking-medium text-lg mb-3">Building & Structural Works</h3>
              <p className="text-gray-500 font-regular tracking-regular text-[14px] leading-relaxed">
                From residential buildings to structural projects, we deliver durable construction with attention to quality and detail.
              </p>
            </div>

            {/* Card 2: Electrical */}
            <div className="bg-gray-50/50 p-8 border border-gray-100 flex flex-col items-start transition-colors duration-300">
              <div className="w-12 h-12 flex items-center justify-center mb-6 text-gray-900">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-gray-900 font-medium tracking-medium text-lg mb-3">Electrical Installation</h3>
              <p className="text-gray-500 font-regular tracking-regular text-[14px] leading-relaxed">
                From residential buildings to structural projects, we deliver durable construction with attention to quality and detail.
              </p>
            </div>

            {/* Card 3: Project Management */}
            <div className="bg-gray-50/50 p-8 border border-gray-100 flex flex-col items-start transition-colors duration-300">
              <div className="w-12 h-12 flex items-center justify-center mb-6 text-gray-900">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-gray-900 font-medium tracking-medium text-lg mb-3">Project Management</h3>
              <p className="text-gray-500 font-regular tracking-regular text-[14px] leading-relaxed">
                From residential buildings to structural projects, we deliver durable construction with attention to quality and detail.
              </p>
            </div>

            {/* Card 4: Real Estate Services (Solid Orange) */}
            <div className="bg-[#FF5C00] text-white p-8 flex flex-col items-start transition-colors duration-300">
              <div className="w-12 h-12 flex items-center justify-center mb-6 text-white">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-white font-medium tracking-medium text-lg mb-3">Real Estate Services</h3>
              <p className="text-white/85 font-regular tracking-regular text-[14px] leading-relaxed">
                From residential buildings to structural projects, we deliver durable construction with attention to quality and detail.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#FF5C00] hover:bg-[#E05200] text-white font-medium tracking-medium text-[15px] rounded-full transition-colors duration-300"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. House on Credit Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 w-full text-center">
        <div className="flex items-center justify-center mb-4">
          <OrangeSlantedBoxes />
          <span className="text-[#FF5C00] font-medium tracking-medium text-sm uppercase">Housing on Credit</span>
        </div>
        <h2 className="text-gray-900 font-medium tracking-medium text-3xl sm:text-4xl mb-4">Build Now. Pay Small Small.</h2>
        <p className="text-gray-500 font-regular tracking-regular text-base max-w-2xl mx-auto leading-relaxed mb-10">
          Whether you're starting a new project, upgrading an existing property, or looking for a path to homeownership, we provide solutions under one roof.
        </p>
        
        {/* Money hand off image (Straight borders) */}
        <div className="max-w-md mx-auto mb-10 overflow-hidden border border-gray-100">
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
      </section>

      {/* 6. Autoplay Video Section (Straight borders) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 md:pb-28 w-full">
        <div className="relative w-full aspect-video overflow-hidden bg-black border border-gray-100">
          <video
            src="/projects1.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 7. Why Choose Us Section */}
      <section className="bg-gray-50/50 border-y border-gray-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
          <div className="flex items-center justify-center mb-4">
            <OrangeSlantedBoxes />
            <span className="text-[#FF5C00] font-medium tracking-medium text-sm uppercase">Why Four Gates</span>
          </div>
          <h2 className="text-gray-900 font-medium tracking-medium text-3xl sm:text-4xl mb-16">Why Build With FOUR GATES LINKS?</h2>

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

      {/* 8. Testimonials Section (Aligned with MR David Ajah exact content) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 w-full">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center mb-4">
            <OrangeSlantedBoxes />
            <span className="text-[#FF5C00] font-medium tracking-medium text-sm uppercase">Testimonial</span>
          </div>
          <h2 className="text-gray-900 font-medium tracking-medium text-3xl sm:text-4xl">Good Work Speaks for Itself.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialList.map((item, idx) => (
            <div key={idx} className="bg-gray-50/50 border border-gray-100 p-8 flex flex-col justify-between">
              <p className="text-gray-500 font-regular tracking-regular text-[14px] leading-relaxed mb-6 italic">
                "{item.quote}"
              </p>
              <div>
                <div className="flex items-center gap-1 mb-3 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-800 font-medium tracking-medium text-sm">MR {item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Project Video Showcase Grid */}
      <section id="projects-showcase" className="bg-gray-50/50 border-y border-gray-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="flex items-center mb-4">
              <OrangeSlantedBoxes />
              <span className="text-[#FF5C00] font-medium tracking-medium text-sm uppercase">Projects</span>
            </div>
            <h2 className="text-gray-900 font-medium tracking-medium text-3xl sm:text-4xl">See What We're Building</h2>
          </div>

          {/* Autoplay Project Grid (Straight borders) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <HoverVideo src="/projects1.mp4" />
            <HoverVideo src="/projects2.mp4" />
            <HoverVideo src="/projects3.mp4" />
          </div>
        </div>
      </section>

      {/* 10. Process Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Steps */}
          <div>
            <div className="flex items-center mb-4">
              <OrangeSlantedBoxes />
              <span className="text-[#FF5C00] font-medium tracking-medium text-sm uppercase">Process</span>
            </div>
            <h2 className="text-gray-900 font-medium tracking-medium text-3xl sm:text-4xl mb-12">From Idea to Completion</h2>

            <div className="space-y-8">
              {[
                { num: "01", title: "Tell Us What You Need", desc: "Share your project, property or homeownership goal with our team." },
                { num: "02", title: "Plan & Assess", desc: "We discuss your requirements, assess the project and determine the best approach." },
                { num: "03", title: "Build & Execute", desc: "Our team gets to work while keeping the project properly supervised." },
                { num: "04", title: "Deliver", desc: "Share your project, property or homeownership goal with our team." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <span className="text-[#FF5C00] font-medium tracking-medium text-2xl leading-none">{step.num} —</span>
                  <div>
                    <h3 className="text-gray-900 font-medium tracking-medium text-lg mb-1">{step.title}</h3>
                    <p className="text-gray-500 font-regular tracking-regular text-[14px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image (Height reduced, aligned with steps, straight borders) */}
          <div className="h-[400px] md:h-[480px] w-full overflow-hidden border border-gray-100">
            <img 
              src="/process-section-picture.jpg" 
              alt="Four Gates Links Construction Site Process" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

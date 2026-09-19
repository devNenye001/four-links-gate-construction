import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { SEO } from '../components/SEO';
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

  const executiveTeamList = [
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
      <SEO 
        title="About Us & Leadership | Four Gates Links Construction Company Nigeria Limited"
        description="Meet Francis Onochie Okolie Nzube, Founder & Director of Four Gates Links Construction Company Nigeria Limited. Discover our leadership, mission, and infrastructure achievements across Nigeria."
        canonical="https://fourgateslink.com/about"
        keywords="Francis Onochie Okolie Nzube, Francis Okolie, Francis Onochie Okolie, ceo of four gates links construction, founder four gates links, managing director four gates links, Care for Care Foundation, construction engineers minna, building contractors niger state"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            '@id': 'https://fourgateslink.com/about#webpage',
            url: 'https://fourgateslink.com/about',
            name: 'About Four Gates Links & Founder Francis Onochie Okolie Nzube',
            description: 'Company background, leadership profile of Founder and Director Francis Onochie Okolie Nzube, and engineering team at Four Gates Links Construction Company Nigeria Limited.',
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
                  name: 'About Us',
                  item: 'https://fourgateslink.com/about'
                }
              ]
            }
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Person',
            '@id': 'https://fourgateslink.com/about#ceo',
            name: 'Francis Onochie Okolie Nzube',
            alternateName: ['Francis Okolie', 'Francis Onochie Okolie', 'Francis Nzube', 'CEO Four Gates Links', 'Founder Four Gates Links'],
            jobTitle: 'Founder and Director',
            worksFor: {
              '@type': 'Organization',
              name: 'FOUR GATES LINKS CONSTRUCTION COMPANY NIGERIA LIMITED',
              url: 'https://fourgateslink.com'
            },
            image: 'https://fourgateslink.com/ceo.jpeg',
            description: 'Francis Onochie Okolie Nzube is a Nigerian entrepreneur, construction professional, and business leader, and the Founder and Director of Four Gates Links Construction Company Nigeria Limited.',
            sameAs: [
              'https://fourgateslink.com/about'
            ]
          }
        ]}
      />

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
            {[
              { icon: <DollarSign className="w-5 h-5 text-white" />, title: "Comprehensive Solutions", desc: "We work toward practical solutions that provide value for your investment." },
              { icon: <UserCheck className="w-5 h-5 text-white" />, title: "Professional Service", desc: "Your project is handled with attention, communication and accountability." },
              { icon: <Users className="w-5 h-5 text-white" />, title: "Trusted Partnerships", desc: "Construction, electrical services, project management and real estate solutions in one place." }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF5C00] flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-gray-900 font-medium tracking-medium text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-500 font-regular tracking-regular text-[14px] leading-relaxed max-w-xs mx-auto">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
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
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
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
              </motion.div>
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
          
          <div className="max-w-md mx-auto mb-10 overflow-hidden bg-white">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["/g1.jpeg", "/g2.jpeg", "/g3.jpeg", "/g4.jpeg", "/g5.jpeg", "/g6.jpeg"].map((imgSrc, idx) => (
              <div 
                key={idx} 
                className="relative aspect-[4/3] overflow-hidden border border-gray-100 bg-gray-50 shadow-sm"
              >
                <img
                  src={imgSrc}
                  alt={`Four Gates Links Construction Project Preview ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF5C00] hover:bg-[#E05200] text-white font-medium tracking-medium text-[15px] rounded-full transition-colors duration-300"
            >
              <span>View All 35 Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Founder & CEO Profile Section */}
      <section className="py-20 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-14 flex flex-col items-center">
            <div className="flex items-center mb-4">
              <OrangeSlantedBoxes />
              <span className="text-[#FF5C00] font-medium tracking-medium text-sm uppercase">Executive Leadership</span>
            </div>
            <h2 className="text-gray-900 font-medium tracking-medium text-3xl sm:text-4xl">Meet Our Founder & Director</h2>
          </div>

          {/* CEO Card Layout */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-gray-50/50 p-6 sm:p-10 lg:p-12 border border-gray-100"
          >
            {/* CEO Picture (No repeated name underneath) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm aspect-[4/5] overflow-hidden border border-gray-200 bg-white shadow-sm">
                <img 
                  src="/ceo.jpeg" 
                  alt="Francis Onochie Okolie Nzube - Founder and Director of Four Gates Links Construction Company Nigeria Limited" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* CEO Bio & Description */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <h3 className="text-gray-900 font-medium tracking-medium text-2xl sm:text-3xl mb-1">
                Francis Onochie Okolie Nzube
              </h3>
              <span className="text-[#FF5C00] text-sm uppercase tracking-wider font-semibold block mb-4">
                Founder & Director
              </span>
              
              <p className="text-gray-600 font-regular tracking-regular text-[15px] sm:text-base leading-relaxed mb-4">
                <strong>Francis Onochie Okolie Nzube</strong> is a Nigerian entrepreneur, construction professional, and business leader with experience in construction, project management, real estate, business development, and engineering-related services across Nigeria and other African countries.
              </p>
              
              <p className="text-gray-600 font-regular tracking-regular text-[15px] sm:text-base leading-relaxed mb-4">
                He is the <strong>Founder and Director of Four Gates Links Construction Company Nigeria Limited</strong>, based in Minna, Niger State, where he oversees building construction, structural works, electrical installations, project management, renovation, maintenance, and real estate services.
              </p>

              <p className="text-gray-600 font-regular tracking-regular text-[15px] sm:text-base leading-relaxed mb-6">
                Beyond construction, Francis is passionate about innovative housing solutions, entrepreneurship, and community development. He is also the founder of <strong>Care for Care Foundation</strong>, an initiative focused on supporting vulnerable individuals and contributing to community development.
              </p>

              {/* Commitment quote/statement block */}
              <div className="w-full p-4 sm:p-5 bg-white border-l-4 border-[#FF5C00] shadow-sm">
                <p className="text-gray-700 italic text-[14px] sm:text-[15px] leading-relaxed">
                  "With a strong commitment to integrity, innovation, professional excellence, and service, Francis aims to build businesses, create opportunities, develop communities, and contribute to sustainable economic and social development in Nigeria and Africa."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Our Team Section (The People Behind the Brand) */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="flex items-center mb-4">
              <OrangeSlantedBoxes />
              <span className="text-[#FF5C00] font-medium tracking-medium text-sm uppercase">Our Team</span>
            </div>
            <h2 className="text-gray-900 font-medium tracking-medium text-3xl sm:text-4xl">The People Behind the Brand</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {executiveTeamList.map((member, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-full aspect-[4/5] overflow-hidden border border-gray-100 mb-4 bg-gray-50">
                  <img 
                    src={member.img} 
                    alt={`${member.name} - ${member.role} at Four Gates Links Construction Company Nigeria Limited`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-gray-900 font-medium tracking-medium text-base mb-1">{member.name}</h3>
                <p className="text-gray-500 font-regular tracking-regular text-[13px]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

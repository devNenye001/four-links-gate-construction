import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { OrangeSlantedBoxes } from './Home';
import { ArrowRight } from 'lucide-react';

export const HousingOnCredit: React.FC = () => {
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
        style={{ backgroundImage: "url('/housing-on-credit-banner.jpg')" }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/55 z-0" />

        {/* Absolute transparent header overlay */}
        <Navbar transparent={true} />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white pb-20 flex-grow flex flex-col justify-end">
          <h1 className="text-4xl md:text-5xl font-medium tracking-medium mb-4">
            Housing On Credit
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto font-regular tracking-regular leading-relaxed">
            With FOUR GATES LINKS' Housing on Credit Scheme, you can secure eligible land or a home and make payments gradually according to an agreed flexible payment plan.
          </p>
        </div>

        {/* SVG curved wave transition at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[55px] fill-white text-white">
            <path d="M0,90 C300,130 800,130 1200,50 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-12 w-full bg-white relative z-10" />

      {/* 2. Intro Paragraph Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-gray-900 font-medium tracking-medium text-2xl sm:text-3xl mb-6">
          You Don't Have to Pay Everything at Once.
        </h2>
        <p className="text-gray-500 font-regular tracking-regular text-base leading-relaxed">
          We believe owning land or a home should be more achievable. Our Housing on Credit Scheme allows eligible clients to spread the cost of their property over an agreed period, making it easier to plan your finances while working towards full ownership. Whether you're looking to buy land or own a house, we can help you take that step without having to provide the entire cost upfront.
        </p>
      </section>

      {/* 3. What can you get Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 w-full text-center">
        <h2 className="text-gray-900 font-medium tracking-medium text-2xl sm:text-3xl mb-12">
          What can you get?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 text-left">
          {/* Land Column */}
          <div className="flex flex-col items-start">
            <h3 className="text-gray-900 font-medium tracking-medium text-lg uppercase mb-3">
              Land on Credit
            </h3>
            <p className="text-gray-500 font-regular tracking-regular text-[15px] leading-relaxed mb-6">
              Choose an eligible plot of land and pay in manageable instalments until the agreed purchase price is fully paid.
            </p>
            <a
              href="https://wa.me/2347049463239"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5C00] hover:bg-[#E05200] text-white font-medium tracking-medium text-[14px] rounded-full transition-colors duration-300"
            >
              <span>Enquire About Land</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* House Column */}
          <div className="flex flex-col items-start">
            <h3 className="text-gray-900 font-medium tracking-medium text-lg uppercase mb-3">
              House on Credit
            </h3>
            <p className="text-gray-500 font-regular tracking-regular text-[15px] leading-relaxed mb-6">
              Looking to own a home? Our scheme provides an opportunity to acquire an eligible house and spread your payments over an agreed period until the total cost is completed.
            </p>
            <a
              href="https://wa.me/2347049463239"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5C00] hover:bg-[#E05200] text-white font-medium tracking-medium text-[14px] rounded-full transition-colors duration-300"
            >
              <span>Enquire About House</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. Journey Process Section */}
      <section className="bg-gray-50/50 border-y border-gray-100 py-20 w-full text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center mb-4">
            <OrangeSlantedBoxes />
            <span className="text-[#FF5C00] font-medium tracking-medium text-sm uppercase">Process</span>
          </div>
          <h2 className="text-gray-900 font-medium tracking-medium text-3xl sm:text-4xl mb-16">
            Your Journey to Ownership
          </h2>

          <div className="space-y-12 max-w-2xl mx-auto">
            {[
              {
                num: "01",
                title: "Choose Your Property",
                desc: "Select an eligible land or house that meets your needs and budget."
              },
              {
                num: "02",
                title: "Agree on Your Plan",
                desc: "Discuss the property price, payment schedule, duration, and applicable terms with our team."
              },
              {
                num: "03",
                title: "Pay Gradually",
                desc: "Make your agreed payments according to the payment plan."
              },
              {
                num: "04",
                title: "Complete Your Payments",
                desc: "Continue until the full agreed price has been paid."
              },
              {
                num: "05",
                title: "Complete Your Ownership Process",
                desc: "Once your payment obligations are fulfilled, the applicable documentation and ownership process will be completed according to the agreed terms."
              }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <h3 className="text-[#FF5C00] font-medium tracking-medium text-lg mb-2">
                  {step.num} — {step.title}
                </h3>
                <p className="text-gray-500 font-regular tracking-regular text-[15px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

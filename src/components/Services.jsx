import React from "react";
import { FaBroom, FaCoffee, FaShieldAlt, FaTools, FaLeaf, FaBug, FaHeadset } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Services() {
  const services = [
    { title: "Housekeeping & Janitorial", detail: "Professional cleaning and upkeep for workplaces and facilities.", icon: <FaBroom className="text-4xl text-orange-400 mb-3" /> },
    { title: "Pantry & Office Support", detail: "Trained staff ensuring smooth office and pantry operations.", icon: <FaCoffee className="text-4xl text-orange-400 mb-3" /> },
    { title: "Security & Surveillance", detail: "24/7 security services with advanced monitoring systems.", icon: <FaShieldAlt className="text-4xl text-orange-400 mb-3" /> },
    { title: "Technical Maintenance", detail: "Expert maintenance for electrical, plumbing & HVAC systems.", icon: <FaTools className="text-4xl text-orange-400 mb-3" /> },
    { title: "Gardening & Landscaping", detail: "Green spaces designed and maintained for better aesthetics.", icon: <FaLeaf className="text-4xl text-orange-400 mb-3" /> },
    { title: "Pest Control & Waste", detail: "Eco-friendly pest management and efficient waste solutions.", icon: <FaBug className="text-4xl text-orange-400 mb-3" /> },
    { title: "Front Office & Helpdesk", detail: "Reception and customer support for professional experiences.", icon: <FaHeadset className="text-4xl text-orange-400 mb-3" /> },
  ];

  // Split first row and bottom row
  const firstRow = services.slice(0, 4); // adjust based on lg:grid-cols
  const bottomRow = services.slice(4);

  return (
    <section id="services" className="py-20 px-6 lg:px-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-orange-400 mb-12 tracking-wide drop-shadow-lg">
          Our <span className="text-black">Services</span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500 rounded"></span>
        </h1>

        {/* First Row - Grid */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6 flex-wrap">
          {firstRow.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Bottom Row - Centered Flex with arrows */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6 flex-wrap">
          {bottomRow.map((service, index, arr) => (
            <React.Fragment key={index}>
              <ServiceCard service={service} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

// Reusable Card Component
function ServiceCard({ service }) {
  return (
    <div className="group w-full sm:w-56 h-64 [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white backdrop-blur-sm border border-orange-400/50 rounded-xl shadow-lg [backface-visibility:hidden] p-4">
          {service.icon}
          <h3 className="text-lg md:text-xl font-semibold text-black text-center">{service.title}</h3>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl shadow-lg text-center px-4 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-sm md:text-base">{service.detail}</p>
        </div>
      </div>
    </div>
  );
}
